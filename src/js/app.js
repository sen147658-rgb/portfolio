import { Loader } from "../components/Loader/Loader.js";
import { Navbar } from "../components/Navbar/Navbar.js";
import { Hero } from "../components/Hero/Hero.js";

import { initHeroAnimation } from "./hero.js";
import { initNavigation } from "./navigation.js";

export function App() {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if (loader) {

            loader.style.opacity = "0";
            loader.style.transition = "0.8s";

            setTimeout(() => {

                loader.remove();

                initHeroAnimation();

                initNavigation();

            }, 800);

        } else {

            initHeroAnimation();
            initNavigation();

        }

    }, 2500);

    return `

        ${Loader()}

        ${Navbar()}

        <main>

            ${Hero()}

        </main>

    `;

}