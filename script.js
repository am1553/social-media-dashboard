const modeSwitchBtn = document.getElementById("mode-switch");
const mainTag = document.querySelector("main");

modeSwitchBtn.addEventListener("click", () => {
    mainTag.classList.toggle("toggleDarkMode");
})