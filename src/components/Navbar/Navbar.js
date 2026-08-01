export function Navbar() {

    return `

        <header class="navbar">

            <div class="container navbar-container">

                <a href="#" class="logo">
                    LEGACY
                </a>

                <button
                    class="menu-toggle"
                    id="menuToggle"
                    aria-label="Open Menu">

                    <span></span>
                    <span></span>
                    <span></span>

                </button>

                <nav class="navigation" id="navigation">

                    <ul class="nav-links">

                        <li>
                            <a href="#home" class="active">
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="#about">
                                About
                            </a>
                        </li>

                        <li>
                            <a href="#journey">
                                Journey
                            </a>
                        </li>

                        <li>
                            <a href="#gallery">
                                Gallery
                            </a>
                        </li>

                        <li>
                            <a href="#achievements">
                                Achievements
                            </a>
                        </li>

                        <li>
                            <a href="#family">
                                Family
                            </a>
                        </li>

                        <li>
                            <a href="#contact">
                                Contact
                            </a>
                        </li>

                    </ul>

                </nav>

            </div>

        </header>

    `;

}