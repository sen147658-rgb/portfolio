import "./Resume.css";

export function Resume() {

    return `

    <section class="resume-page">

        <div class="container">

            <div class="resume-header">

                <span class="section-tag">
                    PROFESSIONAL PROFILE
                </span>

                <h1 class="resume-title">
                    Resume
                </h1>

                <p class="resume-description">

                    Java Backend Developer with 4+ years of experience in designing,
                    developing and maintaining enterprise applications using Java,
                    Spring Boot, Microservices, REST APIs, Kafka, PostgreSQL,
                    Angular and cloud technologies.

                </p>

                <a
                    href="/resume/Pranshu_Sen_Resume.pdf"
                    download
                    class="download-btn">

                    ⬇ Download Resume

                </a>

            </div>

            <!-- Summary -->

            <section class="resume-section">

                <h2>Professional Summary</h2>

                <div class="glass-card">

                    <p>

                        Passionate Software Engineer with strong expertise in backend
                        development, distributed systems and scalable REST APIs.
                        Experienced in enterprise banking and security applications.
                        Skilled in Java, Spring Boot, Microservices, Kafka,
                        PostgreSQL, MongoDB and Angular.

                    </p>

                </div>

            </section>

            <!-- Experience -->

            <section class="resume-section">

                <h2>Experience</h2>

                <div class="timeline">

                    <div class="timeline-item">

                        <div class="timeline-year">

                            2025 - Present

                        </div>

                        <div class="timeline-content">

                            <h3>Infosys</h3>

                            <h4>Java Backend Developer</h4>

                            <p>

                                Working on enterprise applications using Java,
                                Spring Boot, Microservices, REST APIs, Kafka,
                                PostgreSQL and Angular.

                            </p>

                        </div>

                    </div>

                    <div class="timeline-item">

                        <div class="timeline-year">

                            2022 - 2025

                        </div>

                        <div class="timeline-content">

                            <h3>Atos</h3>

                            <h4>Software Engineer</h4>

                            <p>

                                Built scalable backend services, security modules,
                                API integrations and vulnerability management
                                solutions.

                            </p>

                        </div>

                    </div>

                </div>

            </section>

            <!-- Skills -->

            <section class="resume-section">

                <h2>Technical Skills</h2>

                <div class="skills-grid">

                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>Microservices</span>
                    <span>Spring Security</span>
                    <span>Hibernate</span>
                    <span>Kafka</span>
                    <span>REST API</span>
                    <span>PostgreSQL</span>
                    <span>MongoDB</span>
                    <span>Angular</span>
                    <span>Git</span>
                    <span>Docker</span>
                    <span>Kubernetes</span>

                </div>

            </section>

            <!-- Projects -->

            <section class="resume-section">

                <h2>Featured Projects</h2>

                <div class="project-grid">

                    <div class="project-card">

                        <h3>Vulnerability Management System</h3>

                        <p>

                            Enterprise security platform built using Spring Boot,
                            Kafka and PostgreSQL.

                        </p>

                    </div>

                    <div class="project-card">

                        <h3>Hospital Management System</h3>

                        <p>

                            Full Stack application using Java, Spring Boot,
                            Angular and PostgreSQL.

                        </p>

                    </div>

                    <div class="project-card">

                        <h3>Portfolio Website</h3>

                        <p>

                            Premium responsive developer portfolio built with
                            JavaScript, HTML and CSS.

                        </p>

                    </div>

                </div>

            </section>

            <!-- Education -->

            <section class="resume-section">

                <h2>Education</h2>

                <div class="glass-card">

                    <h3>Master of Computer Applications (MCA)</h3>

                    <p>

                        RKDF University, Bhopal

                    </p>

                </div>

            </section>

            <!-- Certifications -->

            <section class="resume-section">

                <h2>Certifications</h2>

                <div class="glass-card">

                    <ul>

                        <li>Java & Spring Boot Development</li>

                        <li>Microservices Architecture</li>

                        <li>REST API Development</li>

                        <li>Git & GitHub</li>

                    </ul>

                </div>

            </section>

        </div>

    </section>

    `;

}