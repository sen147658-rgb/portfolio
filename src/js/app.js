import { Loader } from "../components/Loader/Loader.js";
import { Navbar } from "../components/Navbar/Navbar.js";
import { Footer } from "../components/Footer/Footer.js";

import { renderCurrentPage } from "./router.js";
import { initNavigation } from "./navigation.js";
import { initHeroAnimation } from "./hero.js";

export function App() {

    return `

        ${Loader()}

        ${Navbar()}

        <main
            id="page-content"
            class="page-content">

            ${renderCurrentPage()}

        </main>

        ${Footer()}

    `;

}

export function renderApp() {

    const page = document.getElementById("page-content");

    if (!page) return;

    page.classList.remove("page-fade-in");

    page.classList.add("page-fade-out");

    setTimeout(() => {

        page.innerHTML = renderCurrentPage();

        page.classList.remove("page-fade-out");

        page.classList.add("page-fade-in");

        initNavigation();

        initHeroAnimation();

    }, 300);

}

export function initializeApp() {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if (!loader) {

            renderApp();

            return;

        }

        loader.style.opacity = "0";

        loader.style.transition = "0.8s";

        setTimeout(() => {

            loader.remove();

            renderApp();

        }, 800);

    }, 2500);

}