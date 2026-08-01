import { Hero } from "../Hero/Hero.js";

export function Home() {

    return `

        <section
            id="home"
            class="page-section">

            ${Hero()}

        </section>

    `;

}