// JavaScript event handling and DOM manipulation for BrightSpace.
const greetingForm = document.querySelector("#greetingForm");
const nameInput = document.querySelector("#nameInput");
const greetingOutput = document.querySelector("#greetingOutput");
const detailsButton = document.querySelector("#detailsButton");
const extraDetails = document.querySelector("#extraDetails");
const themeToggle = document.querySelector("#themeToggle");
const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");

greetingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  greetingOutput.textContent = name
    ? `Hello, ${name}! Welcome to BrightSpace.`
    : "Please enter your name first.";
});

detailsButton.addEventListener("click", () => {
  const isHidden = extraDetails.hidden;
  extraDetails.hidden = !isHidden;
  detailsButton.textContent = isHidden ? "Hide details" : "Show details";
  detailsButton.setAttribute("aria-expanded", String(isHidden));
});

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
  themeToggle.setAttribute("aria-pressed", String(isDark));
});

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "Close ✕" : "Menu ☰";
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "Menu ☰";
  });
});
