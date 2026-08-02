import "./Hero.css";

export function Hero() {

    return `

    <section class="hero" id="home">

        <div class="hero-background">

            <div class="gradient-circle circle-one"></div>

            <div class="gradient-circle circle-two"></div>

            <div class="gradient-circle circle-three"></div>

        </div>

        <div class="hero-overlay"></div>

        <div class="container hero-container">

            <div class="hero-left">

                <span class="hero-badge">

                    👋 Welcome To My Portfolio

                </span>

                <h2 class="hero-subtitle">

                    Hi, I'm

                </h2>

                <h1 class="hero-title">

                    <span class="gradient-text">

                        Pranshu Sen

                    </span>

                </h1>

                <h3 class="hero-role">

                    Java Backend Developer

                </h3>

                <p class="hero-description">

                    Passionate Software Engineer with experience in building
                    secure, scalable and enterprise-grade applications using
                    Java, Spring Boot, Microservices, Kafka, Docker and modern
                    cloud technologies.

                    I enjoy solving complex backend problems while delivering
                    high-quality user experiences.

                </p>

                <div class="hero-skills">

                    <span>Java</span>

                    <span>Spring Boot</span>

                    <span>Microservices</span>

                    <span>Kafka</span>

                    <span>Docker</span>

                    <span>Angular</span>

                    <span>MongoDB</span>

                    <span>Git</span>

                </div>

                <div class="hero-buttons">

                    <a
                        href="/src/assets/resume/Pranshu_Sen_Resume.pdf"
                        target="_blank"
                        class="btn btn-primary">

                        View Resume

                    </a>

                    <a
                        href="/src/assets/resume/Pranshu_Sen_Resume.pdf"
                        download="Pranshu_Sen_Resume.pdf"
                        class="btn btn-outline">

                        Download Resume

                    </a>

                    <a
                        href="#projects"
                        class="btn btn-outline">

                        View Projects

                    </a>

                </div>

            </div>

            <div class="hero-right">

                <div class="profile-ring">

                    <div class="profile-image">

                        <img
                            src="/Profile.jpg"
                            alt="Pranshu Sen">

                    </div>

                </div>

            </div>

        </div>

        <div class="scroll-indicator">

            <span></span>

            <p>Scroll Down</p>

        </div>

    </section>

    `;

}