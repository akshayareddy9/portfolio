// Typing Effect
const typingText = "AI & ML Enthusiast | Developer | Innovator";
let i = 0;
function typeEffect() {
  if (i < typingText.length) {
    document.querySelector(".hero p").textContent += typingText.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll("section, .project-card, .edu-card");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("reveal");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);

// Glowing Cursor Effect
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});
