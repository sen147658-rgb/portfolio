import "./About.css";

export function About() {

    return `

    <section class="about">

        <div class="container">

            <div class="section-header">

                <span>ABOUT ME</span>

                <h2>Who Am I?</h2>

                <p>
                    Passionate Backend Developer focused on building scalable,
                    secure and high-performance enterprise applications.
                </p>

            </div>

            <div class="about-grid">

                <div class="about-image">

                    <img
                        src="/images/profile.jpg"
                        alt="Pranshu Sen">

                </div>

                <div class="about-content">

                    <h3>
                        Java Backend Developer
                    </h3>

                    <p>

                        I have over 4 years of experience developing enterprise
                        applications using Java, Spring Boot, Microservices,
                        Kafka, PostgreSQL and Angular.

                    </p>

                    <p>

                        I enjoy solving complex backend problems,
                        designing scalable REST APIs,
                        optimizing database performance,
                        and building clean architectures.

                    </p>

                    <div class="skills-grid">

                        <span>Java</span>

                        <span>Spring Boot</span>

                        <span>Microservices</span>

                        <span>Kafka</span>

                        <span>PostgreSQL</span>

                        <span>MongoDB</span>

                        <span>Angular</span>

                        <span>Docker</span>

                    </div>

                </div>

            </div>

            <div class="info-grid">

                <div class="info-card">

                    <h4>Experience</h4>

                    <p>4+ Years</p>

                </div>

                <div class="info-card">

                    <h4>Location</h4>

                    <p>Bengaluru, India</p>

                </div>

                <div class="info-card">

                    <h4>Email</h4>

                    <p>pranshumca@gmail.com</p>

                </div>

                <div class="info-card">

                    <h4>Availability</h4>

                    <p>Open to Opportunities</p>

                </div>

            </div>

        </div>

    </section>

    `;

}