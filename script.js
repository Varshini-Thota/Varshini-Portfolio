
console.log("Welcome to Varshini's Portfolio!");

console.log("Navigation bar loaded successfully!");



// DARK MODE WITH SAVED PREFERENCE

const themeToggle = document.getElementById("themeToggle");

// Apply the saved theme when the page loads
const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
} else {
    document.body.classList.remove("dark-mode");
    themeToggle.textContent = "🌙";
}

// Toggle and save the selected theme
themeToggle.addEventListener("click", function () {

    const isDark = document.body.classList.toggle("dark-mode");

    if (isDark) {
        localStorage.setItem("portfolioTheme", "dark");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("portfolioTheme", "light");
        themeToggle.textContent = "🌙";
    }

});


