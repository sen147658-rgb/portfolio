import "./Gallery.css";

export function Gallery() {

    return `

    <section class="gallery">

        <div class="container">

            <div class="section-header">

                <span>GALLERY</span>

                <h2>Journey & Achievements</h2>

                <p>

                    A glimpse of my professional journey,
                    certifications, work life and memorable moments.

                </p>

            </div>

            <div class="gallery-grid">

                <div class="gallery-card">

                    <img
                        src="/images/gallery/gallery1.jpg"
                        alt="Gallery Image">

                    <div class="gallery-overlay">

                        <h3>Office Life</h3>

                    </div>

                </div>

                <div class="gallery-card">

                    <img
                        src="/images/gallery/gallery2.jpg"
                        alt="Gallery Image">

                    <div class="gallery-overlay">

                        <h3>Certificate</h3>

                    </div>

                </div>

                <div class="gallery-card">

                    <img
                        src="/images/gallery/gallery3.jpg"
                        alt="Gallery Image">

                    <div class="gallery-overlay">

                        <h3>Project Demo</h3>

                    </div>

                </div>

                <div class="gallery-card">

                    <img
                        src="/images/gallery/gallery4.jpg"
                        alt="Gallery Image">

                    <div class="gallery-overlay">

                        <h3>Team Event</h3>

                    </div>

                </div>

                <div class="gallery-card">

                    <img
                        src="/images/gallery/gallery5.jpg"
                        alt="Gallery Image">

                    <div class="gallery-overlay">

                        <h3>Learning</h3>

                    </div>

                </div>

                <div class="gallery-card">

                    <img
                        src="/images/gallery/gallery6.jpg"
                        alt="Gallery Image">

                    <div class="gallery-overlay">

                        <h3>Achievement</h3>

                    </div>

                </div>

            </div>

        </div>

    </section>

    `;

}