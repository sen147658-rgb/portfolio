import { setPage, getCurrentPage } from "./state.js";
import { renderApp } from "./app.js";

export function initNavigation() {

    bindLinks();

    initMenu();

}

function bindLinks() {

    document.querySelectorAll("[data-page]").forEach(link => {

        link.onclick = (e) => {

            e.preventDefault();

            const page = link.dataset.page;

            setPage(page);

            renderApp();

            updateActive(page);

            closeMenu();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        };

    });

    updateActive(getCurrentPage());

}

function updateActive(page) {

    document.querySelectorAll("[data-page]").forEach(link => {

        link.classList.remove("active");

        if (link.dataset.page === page) {

            link.classList.add("active");

        }

    });

}

function initMenu() {

    const toggle = document.getElementById("menuToggle");

    const nav = document.getElementById("navigation");

    const overlay = document.getElementById("menuOverlay");

    if (!toggle) return;

    toggle.onclick = () => {

        toggle.classList.toggle("active");

        nav.classList.toggle("open");

        overlay.classList.toggle("active");

    };

    overlay.onclick = closeMenu;

}

function closeMenu() {

    document.getElementById("menuToggle")?.classList.remove("active");

    document.getElementById("navigation")?.classList.remove("open");

    document.getElementById("menuOverlay")?.classList.remove("active");

}