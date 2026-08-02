import "./Projects.css";

export function Projects() {

    return `

    <section class="projects-page">

        <div class="container">

            <div class="projects-header">

                <span class="section-tag">

                    FEATURED PROJECTS

                </span>

                <h1>

                    My Projects

                </h1>

                <p>

                    A collection of enterprise applications and personal projects
                    showcasing my expertise in Java Backend Development,
                    Spring Boot, Microservices and Full Stack Development.

                </p>

            </div>

            <div class="projects-grid">

                <!-- Project 1 -->

                <div class="project-card">

                    <div class="project-status">

                        Enterprise Project

                    </div>

                    <h2>

                        Vulnerability Management System

                    </h2>

                    <p>

                        Enterprise security platform developed at Atos to
                        identify, prioritize and remediate vulnerabilities
                        across enterprise infrastructure.

                    </p>

                    <div class="tech-stack">

                        <span>Java</span>

                        <span>Spring Boot</span>

                        <span>Kafka</span>

                        <span>REST API</span>

                        <span>PostgreSQL</span>

                        <span>Microservices</span>

                    </div>

                    <div class="project-footer">

                        <span>

                            🏢 Atos

                        </span>

                    </div>

                </div>

                <!-- Project 2 -->

                <div class="project-card">

                    <div class="project-status">

                        Enterprise Project

                    </div>

                    <h2>

                        Vanguard Vulnerability Remediation

                    </h2>

                    <p>

                        Worked at Infosys on upgrading Spring Boot services,
                        resolving security vulnerabilities and maintaining
                        enterprise applications for Vanguard.

                    </p>

                    <div class="tech-stack">

                        <span>Spring Boot</span>

                        <span>Java</span>

                        <span>Angular</span>

                        <span>PostgreSQL</span>

                        <span>SonarQube</span>

                        <span>Wiz</span>

                    </div>

                    <div class="project-footer">

                        <span>

                            🏢 Infosys

                        </span>

                    </div>

                </div>

                <!-- Project 3 -->

                <div class="project-card">

                    <div class="project-status">

                        Personal Project

                    </div>

                    <h2>

                        Hospital Management System

                    </h2>

                    <p>

                        Full Stack application for managing patients,
                        doctors, appointments, authentication,
                        billing and reports.

                    </p>

                    <div class="tech-stack">

                        <span>Spring Boot</span>

                        <span>Angular</span>

                        <span>JWT</span>

                        <span>PostgreSQL</span>

                    </div>

                    <div class="project-footer">

                        <span>

                            👨‍💻 Personal

                        </span>

                    </div>

                </div>

                <!-- Project 4 -->

                <div class="project-card">

                    <div class="project-status">

                        Personal Project

                    </div>

                    <h2>

                        Portfolio Website

                    </h2>

                    <p>

                        Modern responsive portfolio built using
                        JavaScript, HTML, CSS and Vite featuring
                        animations, responsive layouts and resume download.

                    </p>

                    <div class="tech-stack">

                        <span>JavaScript</span>

                        <span>HTML5</span>

                        <span>CSS3</span>

                        <span>Vite</span>

                    </div>

                    <div class="project-footer">

                        <span>

                            🌐 Portfolio

                        </span>

                    </div>

                </div>

            </div>

        </div>

    </section>

    `;

}