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

    </section>

    `;

}