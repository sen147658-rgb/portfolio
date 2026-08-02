import "./Projects.css";

export function Projects() {

    return `

    <section class="projects">

        <div class="container">

            <div class="section-header">

                <span>PORTFOLIO</span>

                <h2>Featured Projects</h2>

                <p>

                    A collection of enterprise and personal applications built
                    using Java, Spring Boot, Microservices and Angular.

                </p>

            </div>

            <div class="project-grid">

                <!-- Project 1 -->

                <div class="project-card">

                    <div class="project-image">

                        <span>🚀</span>

                    </div>

                    <div class="project-content">

                        <h3>

                            Vulnerability Management System

                        </h3>

                        <p>

                            Enterprise security platform developed using Java,
                            Spring Boot and Microservices for identifying,
                            tracking and resolving infrastructure
                            vulnerabilities.

                        </p>

                        <div class="project-tech">

                            <span>Java</span>
                            <span>Spring Boot</span>
                            <span>Microservices</span>
                            <span>PostgreSQL</span>

                        </div>

                        <div class="project-buttons">

                            <a href="#">View Details</a>

                        </div>

                    </div>

                </div>

                <!-- Project 2 -->

                <div class="project-card">

                    <div class="project-image">

                        <span>🏥</span>

                    </div>

                    <div class="project-content">

                        <h3>

                            Hospital Management System

                        </h3>

                        <p>

                            Complete hospital administration system including
                            appointment booking, patient records, doctor
                            management and secure authentication.

                        </p>

                        <div class="project-tech">

                            <span>Java</span>
                            <span>Spring Boot</span>
                            <span>Angular</span>
                            <span>MySQL</span>

                        </div>

                        <div class="project-buttons">

                            <a href="#">View Details</a>

                        </div>

                    </div>

                </div>

                <!-- Project 3 -->

                <div class="project-card">

                    <div class="project-image">

                        <span>🎮</span>

                    </div>

                    <div class="project-content">

                        <h3>

                            Color Prediction Gaming Platform

                        </h3>

                        <p>

                            Full Stack gaming application with authentication,
                            wallet management, secure APIs and responsive UI.

                        </p>

                        <div class="project-tech">

                            <span>Java</span>
                            <span>Spring Boot</span>
                            <span>Angular</span>
                            <span>MongoDB</span>

                        </div>

                        <div class="project-buttons">

                            <a href="#">View Details</a>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>

    `;

}