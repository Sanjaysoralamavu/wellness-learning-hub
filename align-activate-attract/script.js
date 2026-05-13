const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const form = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");

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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!name || !email || !message) {
    formNote.textContent = "Please complete all fields before sending your inquiry.";
    return;
  }

  const subject = encodeURIComponent("Manifestation journey inquiry");
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nIntention or question:\n${message}`
  );

  formNote.textContent = "Opening your email app with the inquiry ready to send.";
  window.location.href = `mailto:drmanjulakiran1@gmail.com?subject=${subject}&body=${body}`;
});
