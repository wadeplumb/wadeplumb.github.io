// This script toggles between light and dark mode based on user preference
// and saves the preference in local storage.
// It also updates the icon displayed on the page to reflect the current mode.
window.addEventListener("DOMContentLoaded", () => {
  const savedScheme = localStorage.getItem("color-scheme");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const icon = document.getElementById("theme-icon");

  let scheme = savedScheme;
  if (!scheme) {
    scheme = prefersDarkScheme.matches ? "dark" : "light";
  }
  document.documentElement.style.colorScheme = scheme;

  if (scheme === "dark") {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
});
// Function to toggle between light and dark mode
function toggle() {
  const current = document.documentElement.style.colorScheme;
  const newScheme = current === "dark" ? "light" : "dark";
  document.documentElement.style.colorScheme = newScheme;
  localStorage.setItem("color-scheme", newScheme);

  const icon = document.getElementById("theme-icon");
  if (newScheme === "dark") {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
}
