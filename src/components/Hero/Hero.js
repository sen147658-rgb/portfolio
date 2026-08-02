import "./Hero.css";

export function Hero() {

    return `

    <section class="hero">

        <div class="hero-bg"></div>

        <div class="container hero-container">

            <div class="hero-left">

                <span class="hero-tag">

                    👋 Hello, I'm

                </span>

                <h1>

                    Pranshu Sen

                </h1>

                <h2>

                    <span id="typing-text">

                        Java Backend Developer

                    </span>

                </h2>

                <p>

                    Passionate Java Backend Developer with 4+ years of experience
                    building enterprise applications using Java, Spring Boot,
                    Microservices, Kafka, PostgreSQL and Angular.

                </p>

                <div class="hero-buttons">

                    <a
                        href="#"
                        data-page="resume"
                        class="btn btn-primary">

                        View Resume

                    </a>

                    <a
                        href="#"
                        data-page="contact"
                        class="btn btn-outline">

                        Contact Me

                    </a>

                </div>

                <div class="hero-social">

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

                    <a
                        href="mailto:pranshumca@gmail.com">

                        Email

                    </a>

                </div>

            </div>

            <div class="hero-right">

                <div class="profile-circle">

                    <div class="profile-avatar">

                        <img
                            src="/images/profile.jpg"
                            alt="Pranshu Sen">

                    </div>

                </div>

            </div>

        </div>

        <div class="hero-stats">

            <div>

                <h2>

                    4+

                </h2>

                <p>

                    Years

                </p>

            </div>

            <div>

                <h2>

                    3+

                </h2>

                <p>

                    Projects

                </p>

            </div>

            <div>

                <h2>

                    15+

                </h2>

                <p>

                    Technologies

                </p>

            </div>

            <div>

                <h2>

                    100%

                </h2>

                <p>

                    Passion

                </p>

            </div>

        </div>

    </section>

    `;

}