import "./Navbar.css";

export function Navbar() {
    return `
        <header class="navbar">

            <div class="container navbar-container">

                <a href="#" class="logo">

                    <div class="logo-icon">PS</div>

                    <div class="logo-text">

                        <span class="logo-name">PRANSHU SEN</span>

                        <span class="logo-role">
                            Java Backend Developer
                        </span>

                    </div>

                </a>

                <button
                    class="menu-toggle"
                    id="menuToggle"
                    aria-label="Toggle Menu">

                    <span></span>
                    <span></span>
                    <span></span>

                </button>

                <nav
                    class="navigation"
                    id="navigation">

                    <ul class="nav-links">

                        <li><a href="#home" class="active">Home</a></li>

                        <li><a href="#about">About</a></li>

                        <li><a href="#experience">Experience</a></li>

                        <li><a href="#projects">Projects</a></li>

                        <li><a href="#resume">Resume</a></li>

                        <li><a href="#gallery">Gallery</a></li>

                        <li><a href="#family">Family</a></li>

                        <li><a href="#contact">Contact</a></li>

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