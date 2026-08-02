import { setPage, getCurrentPage } from "./state.js";
import { renderApp } from "./app.js";

export function initNavigation() {

    bindNavigation();

    initMenu();

}

function bindNavigation() {

    document.querySelectorAll("[data-page]").forEach(element => {

        element.onclick = (event) => {

            event.preventDefault();

            const page = element.dataset.page;

            if (!page) return;

            setPage(page);

            closeMenu();

            renderApp();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        };

    });

    updateActive();

}

function updateActive() {

    const currentPage = getCurrentPage();

    document.querySelectorAll("[data-page]").forEach(link => {

        if (link.dataset.page === currentPage) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });

}

function initMenu() {

    const menuButton = document.getElementById("menuToggle");

    const closeButton = document.getElementById("closeMenu");

    const navigation = document.getElementById("navigation");

    const overlay = document.getElementById("menuOverlay");

    if (!menuButton || !navigation) return;

    menuButton.onclick = openMenu;

    closeButton?.addEventListener("click", closeMenu);

    overlay?.addEventListener("click", closeMenu);

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closeMenu();

        }

    });

    function openMenu() {

        menuButton.classList.add("active");

        navigation.classList.add("open");

        overlay?.classList.add("active");

        document.body.style.overflow = "hidden";

    }

}

export function closeMenu() {

    document.getElementById("menuToggle")?.classList.remove("active");

    document.getElementById("navigation")?.classList.remove("open");

    document.getElementById("menuOverlay")?.classList.remove("active");

    document.body.style.overflow = "";

}