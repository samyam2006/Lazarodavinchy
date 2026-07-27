// Lazaro Davinchy Jewelry — site interactions

// Enables the reveal-on-scroll hidden state (kept off for no-JS visitors)
document.documentElement.classList.add("js");

// Sticky header shadow
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Mobile navigation
const toggle = document.querySelector(".nav-toggle");
toggle.addEventListener("click", () => {
  const open = document.body.classList.toggle("nav-open");
  toggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".site-nav a").forEach((link) =>
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Reveal-on-scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Contact form → opens a prefilled Instagram DM path (no backend needed).
// Swap this handler for a real endpoint (Formspree, Netlify Forms, etc.)
// when one is available.
const form = document.querySelector(".contact-form");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const note = form.querySelector(".form-note");
  const data = new FormData(form);
  const summary = [
    "Hi Lazaro Davinchy! I'm interested in: " + data.get("interest"),
    data.get("message"),
    "— " + data.get("name") + " (" + data.get("email") + ")",
  ].join("\n\n");

  navigator.clipboard?.writeText(summary).catch(() => {});
  note.textContent =
    "Thank you, " + data.get("name") +
    "! Your inquiry was copied to your clipboard — paste it in our Instagram DMs and we'll reply shortly.";
  note.hidden = false;
  window.open("https://www.instagram.com/lazarodavinchy_jewelry/", "_blank", "noopener");
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
