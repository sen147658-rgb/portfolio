import "./About.css";

export function About() {

    return `

    <section class="about-section" id="about">

        <div class="container">

            <div class="section-header">

                <span class="section-badge">

                    ABOUT ME

                </span>

                <h2 class="section-title">

                    Passionate Java Backend Developer

                </h2>

                <p class="section-description">

                    Building secure, scalable and enterprise-grade applications
                    with modern backend technologies.

                </p>

            </div>

            <div class="about-content">

                <div class="about-image">

                    <div class="about-image-ring">

                        <img
                            src="/Profile.jpg"
                            alt="Pranshu Sen">

                    </div>

                </div>

                <div class="about-info">

                    <h3>

                        Hello, I'm Pranshu Sen 👋

                    </h3>

                    <p>

                        I am a Java Backend Developer with over 4 years of
                        experience in designing and developing enterprise
                        applications.

                    </p>

                    <p>

                        My expertise includes Java, Spring Boot,
                        Microservices, Kafka, Docker, PostgreSQL,
                        MongoDB and Angular.

                    </p>

                    <p>

                        I enjoy solving real-world problems,
                        writing clean code and continuously
                        learning new technologies.

                    </p>

                    <div class="about-details">

                        <div>

                            <span>Name</span>

                            <strong>Pranshu Sen</strong>

                        </div>

                        <div>

                            <span>Location</span>

                            <strong>Bangalore, India</strong>

                        </div>

                        <div>

                            <span>Experience</span>

                            <strong>4+ Years</strong>

                        </div>

                        <div>

                            <span>Email</span>

                            <strong>pranshumca@gmail.com</strong>

                        </div>

                    </div>

                </div>

            </div>

            <div class="stats-grid">

                <div class="stat-card">

                    <h3>4+</h3>

                    <p>Years Experience</p>

                </div>

                <div class="stat-card">

                    <h3>20+</h3>

                    <p>Enterprise APIs</p>

                </div>

                <div class="stat-card">

                    <h3>3+</h3>

                    <p>Projects</p>

                </div>

                <div class="stat-card">

                    <h3>10+</h3>

                    <p>Technologies</p>

                </div>

            </div>

        </div>

    </section>

    `;

}