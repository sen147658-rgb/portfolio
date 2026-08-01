import { Loader } from "../components/Loader/Loader.js";
import { Navbar } from "../components/Navbar/Navbar.js";
import { Hero } from "../components/Hero/Hero.js";

import { initHeroAnimation } from "./hero.js";


export function App() {


    setTimeout(() => {


        const loader = document.getElementById("loader");


        if (loader) {


            loader.style.opacity = "0";

            loader.style.transition = "0.8s";


            setTimeout(() => {

                loader.remove();

                initHeroAnimation();

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