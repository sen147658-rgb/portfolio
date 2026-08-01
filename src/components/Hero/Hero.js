import "./Hero.css";

export function Hero() {
    return `
        <section class="hero">

            <div class="hero-background">

                <div class="gradient-circle circle-one"></div>
                <div class="gradient-circle circle-two"></div>

            </div>

            <div class="container hero-container">

                <div class="hero-left">

                    <span class="hero-badge">
                        DIGITAL LEGACY
                    </span>

                    <h1 class="hero-title">
                        Every Journey
                        <br>
                        Deserves To Be
                        <br>
                        Remembered
                    </h1>

                    <p class="hero-description">
                        Preserve memories, milestones, achievements,
                        photographs and stories in one beautiful place.
                    </p>

                    <div class="hero-actions">

                        <button class="btn btn-primary">
                            Explore
                        </button>

                        <button class="btn btn-outline">
                            My Journey
                        </button>

                    </div>

                </div>

                <div class="hero-right">

                    <div class="profile-ring">

                        <div class="profile-image">

                            <img
                                src="https://placehold.co/450x450"
                                alt="Profile">

                        </div>

                    </div>

                </div>

            </div>

        </section>
    `;
}