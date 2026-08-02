import "./Resume.css";

export function Resume() {

    return `

    <section class="resume-section" id="resume">

        <div class="container">

            <div class="section-header">

                <span class="section-badge">
                    MY RESUME
                </span>

                <h2 class="section-title">
                    Professional Profile
                </h2>

                <p class="section-description">

                    A summary of my professional journey, technical expertise,
                    education and achievements as a Java Backend Developer.

                </p>

            </div>

            <div class="resume-grid">

                <div class="resume-card">

                    <h3>Professional Summary</h3>

                    <p>

                        Java Backend Developer with 4+ years of experience in
                        designing and developing enterprise applications using
                        Java, Spring Boot, Microservices, Kafka, Docker,
                        MongoDB and PostgreSQL.

                        Passionate about scalable backend systems,
                        cloud technologies and clean architecture.

                    </p>

                </div>

                <div class="resume-card">

                    <h3>Experience</h3>

                    <ul>

                        <li>
                            <strong>Infosys</strong><br>
                            Java Backend Developer<br>
                            2025 - Present
                        </li>

                        <li>
                            <strong>Atos</strong><br>
                            Software Engineer<br>
                            2022 - 2025
                        </li>

                        <li>
                            <strong>NJ Group</strong><br>
                            Full Stack Developer<br>
                            2021
                        </li>

                    </ul>

                </div>

                <div class="resume-card">

                    <h3>Technical Skills</h3>

                    <div class="skill-list">

                        <span>Java</span>
                        <span>Spring Boot</span>
                        <span>Microservices</span>
                        <span>Kafka</span>
                        <span>Docker</span>
                        <span>Angular</span>
                        <span>MongoDB</span>
                        <span>PostgreSQL</span>
                        <span>Git</span>
                        <span>REST APIs</span>

                    </div>

                </div>

                <div class="resume-card">

                    <h3>Education</h3>

                    <p>

                        <strong>Master of Computer Applications</strong>

                        <br><br>

                        RKDF University

                        <br>

                        2021

                    </p>

                </div>

                <div class="resume-card">

                    <h3>Projects</h3>

                    <ul>

                        <li>Vulnerability Management System</li>

                        <li>JCB Marketplace</li>

                        <li>Legacy Portfolio</li>

                    </ul>

                </div>

                <div class="resume-card">

                    <h3>Resume</h3>

                    <div class="resume-buttons">

                        <a

                            href="/assets/resume/Pranshu_Sen_Resume.pdf"

                            target="_blank"

                            class="btn btn-primary">

                            View Resume

                        </a>

                        <a

                            href="/assets/resume/Pranshu_Sen_Resume.pdf"

                            download

                            class="btn btn-outline">

                            Download Resume

                        </a>

                    </div>

                </div>

            </div>

        </div>

    </section>

    `;

}