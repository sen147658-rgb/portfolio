import "./Navbar.css";

export function Navbar() {

    return `

    <header class="navbar">

        <div class="container navbar-container">

            <div class="logo" data-page="home">

                <div class="logo-icon">
                    PS
                </div>

                <div class="logo-text">

                    <span class="logo-name">
                        PRANSHU SEN
                    </span>

                    <span class="logo-role">
                        Java Backend Developer
                    </span>

                </div>

            </div>

            <button
                class="menu-toggle"
                id="menuToggle"
                aria-label="Menu">

                <span></span>
                <span></span>
                <span></span>

            </button>

            <nav
                class="navigation"
                id="navigation">

                <ul class="nav-links">

                    <li>
                        <a href="#" data-page="home" class="active">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#" data-page="about">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#" data-page="experience">
                            Experience
                        </a>
                    </li>

                    <li>
                        <a href="#" data-page="projects">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#" data-page="resume">
                            Resume
                        </a>
                    </li>

                    <li>
                        <a href="#" data-page="gallery">
                            Gallery
                        </a>
                    </li>

                    <li>
                        <a href="#" data-page="family">
                            Family
                        </a>
                    </li>

                    <li>
                        <a href="#" data-page="contact">
                            Contact
                        </a>
                    </li>

                </ul>

            </nav>

        </div>

    </header>

    <div
        class="menu-overlay"
        id="menuOverlay">
    </div>

    `;

}