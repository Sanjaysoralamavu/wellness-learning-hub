const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const form = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");
const accessKeyPlaceholder = "YOUR_WEB3FORMS_ACCESS_KEY";

const syncHeader = () => {
  const scrolled = window.scrollY > 12;
  header.classList.toggle("is-scrolled", scrolled);
};

const closeMenu = () => {
  document.body.classList.remove("nav-open");
  header.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open menu");
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

nav.addEventListener("click", (event) => {
  const target = event.target.closest("a");
  if (target) {
    closeMenu();
  }
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");
    const target = document.querySelector(id);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", id);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const setFormStatus = (message, type = "neutral") => {
  formNote.textContent = message;
  formNote.dataset.status = type;
};

const setSubmitState = (isSubmitting) => {
  const submitButton = form.querySelector('button[type="submit"]');
  const labelNode = Array.from(submitButton.childNodes).find(
    (node) => node.nodeType === Node.TEXT_NODE && node.nodeValue.trim()
  );

  submitButton.disabled = isSubmitting;

  if (labelNode) {
    labelNode.nodeValue = isSubmitting ? "Sending " : "Send Inquiry ";
  }
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();
  const accessKey = String(data.get("access_key") || "").trim();

  if (!name || !email || !message) {
    setFormStatus("Please complete the required fields before sending your inquiry.", "error");
    return;
  }

  if (!accessKey || accessKey === accessKeyPlaceholder) {
    setFormStatus("Add the Web3Forms access key in index.html before publishing this form.", "error");
    return;
  }

  try {
    setSubmitState(true);
    setFormStatus("Sending your inquiry...", "neutral");

    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    const result = await response.json();

    if (response.ok && result.success) {
      form.reset();
      setFormStatus("Thank you. Your inquiry has been sent successfully.", "success");
      return;
    }

    setFormStatus(result.message || "Something went wrong. Please try again in a moment.", "error");
  } catch (error) {
    setFormStatus("Unable to send right now. Please check your connection and try again.", "error");
  } finally {
    setSubmitState(false);
  }
});
