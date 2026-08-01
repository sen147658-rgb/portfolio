import { Loader } from "../components/Loader/Loader.js";
import { Navbar } from "../components/Navbar/Navbar.js";
import { Hero } from "../components/Hero/Hero.js";

export function App() {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if (loader) {

            loader.style.opacity = "0";
            loader.style.transition = ".8s";

            setTimeout(() => {

                loader.remove();

            }, 800);

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