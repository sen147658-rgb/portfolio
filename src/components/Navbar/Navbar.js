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

            <nav class="desktop-nav">

                <a href="#" data-page="home" class="active">Home</a>

                <a href="#" data-page="about">About</a>

                <a href="#" data-page="experience">Experience</a>

                <a href="#" data-page="projects">Projects</a>

                <a href="#" data-page="resume">Resume</a>

                <a href="#" data-page="gallery">Gallery</a>

                <a href="#" data-page="family">Family</a>

                <a href="#" data-page="contact">Contact</a>

            </nav>

            <div class="navbar-actions">

                <button
                    id="themeToggle"
                    class="theme-toggle"
                    aria-label="Toggle Theme">

                    🌙

                </button>

                <button
                    class="menu-toggle"
                    id="menuToggle"
                    aria-label="Open Menu">

                    <span></span>
                    <span></span>
                    <span></span>

                </button>

            </div>

        </div>

    </header>

    <div
        class="menu-overlay"
        id="menuOverlay">
    </div>

    <nav
        class="mobile-menu"
        id="navigation">

        <button
            class="close-menu"
            id="closeMenu">

            ✕

        </button>

        <ul class="mobile-links">

            <li><a href="#" data-page="home">🏠 Home</a></li>

            <li><a href="#" data-page="about">👤 About</a></li>

            <li><a href="#" data-page="experience">💼 Experience</a></li>

            <li><a href="#" data-page="projects">🚀 Projects</a></li>

            <li><a href="#" data-page="resume">📄 Resume</a></li>

            <li><a href="#" data-page="gallery">🖼 Gallery</a></li>

            <li><a href="#" data-page="family">❤️ Family</a></li>

            <li><a href="#" data-page="contact">📞 Contact</a></li>

        </ul>

        <div class="mobile-social">

            <a
                href="https://github.com/pranshu7489768236"
                target="_blank">

                GitHub

            </a>

            <a
                href="https://www.linkedin.com/in/pranshu-sen-37a63a196/"
                target="_blank">

                LinkedIn

            </a>

        </div>

    </nav>

    `;

}