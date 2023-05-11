const btnDark = document.querySelector(".dark-mode-btn");

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  btnDark.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
}

if (localStorage.getItem("darkMode") === "dark") {
  btnDark.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
  btnDark.classList.remove("dark-mode-btn--active");
  document.body.classList.remove("dark");
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    const newColorScheme = event.matches ? "dark" : "light";

    if (newColorScheme === "dark") {
      btnDark.classList.add("dark-mode-btn--active");
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "dark");
    } else {
      btnDark.classList.remove("dark-mode-btn--active");
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "light");
    }
  });

btnDark.onclick = function () {
  btnDark.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "light");
  }
};
