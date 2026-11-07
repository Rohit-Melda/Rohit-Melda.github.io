// Personalize the links below before publishing.
const GITHUB_USERNAME = "YOUR_GITHUB_USERNAME";
const CONTACT_EMAIL = "YOUR_EMAIL@example.com";

const githubLink = document.getElementById("githubLink");
const emailLink = document.getElementById("emailLink");
if (GITHUB_USERNAME !== "YOUR_GITHUB_USERNAME") {
  githubLink.href = `https://github.com/${GITHUB_USERNAME}`;
}
if (CONTACT_EMAIL !== "YOUR_EMAIL@example.com") {
  emailLink.href = `mailto:${CONTACT_EMAIL}`;
}

// Typing effect
const words = ["code.", "ideas.", "experiences.", "solutions."];
const typed = document.getElementById("typed");
let wordIndex = 0, charIndex = words[0].length, deleting = false;
function typeLoop() {
  const word = words[wordIndex];
  if (!deleting) {
    charIndex++;
    typed.textContent = word.slice(0, charIndex);
    if (charIndex === word.length) {
      deleting = true;
      setTimeout(typeLoop, 1150);
      return;
    }
  } else {
    charIndex--;
    typed.textContent = word.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(typeLoop, deleting ? 55 : 105);
}
setTimeout(typeLoop, 1400);

// Reveal elements as they enter the viewport
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// Reading progress indicator
window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  document.getElementById("progress").style.width = `${progress}%`;
});

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
