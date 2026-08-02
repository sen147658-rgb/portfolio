const STORAGE_KEY = "portfolio-theme";

export function initTheme() {

    const savedTheme = localStorage.getItem(STORAGE_KEY) || "dark";

    document.documentElement.setAttribute("data-theme", savedTheme);

    const button = document.getElementById("themeToggle");

    if (!button) return;

    updateIcon(savedTheme);

    button.onclick = () => {

        const current = document.documentElement.getAttribute("data-theme");

        const next = current === "dark"
            ? "light"
            : "dark";

        document.documentElement.setAttribute("data-theme", next);

        localStorage.setItem(STORAGE_KEY, next);

        updateIcon(next);

    };

}

function updateIcon(theme) {

    const button = document.getElementById("themeToggle");

    if (!button) return;

    button.innerHTML = theme === "dark"
        ? "☀️"
        : "🌙";

}