import "./Contact.css";

export function Contact() {

    return `

    <section class="contact-page">

        <div class="container">

            <div class="contact-header">

                <span class="section-tag">

                    GET IN TOUCH

                </span>

                <h1>

                    Let's Build Something Amazing

                </h1>

                <p>

                    I'm always open to discussing Java Backend Development,
                    Full Stack opportunities, freelance projects, and exciting
                    collaborations.

                </p>

            </div>

            <div class="contact-grid">

                <!-- LEFT -->

                <div class="contact-info">

                    <div class="info-card">

                        <h3>📧 Email</h3>

                        <a href="mailto:pranshumca@gmail.com">

                            pranshumca@gmail.com

                        </a>

                    </div>

                    <div class="info-card">

                        <h3>📱 Phone</h3>

                        <a href="tel:+917489768236">

                            +91 74897 68236

                        </a>

                    </div>

                    <div class="info-card">

                        <h3>💼 LinkedIn</h3>

                        <a
                            href="https://www.linkedin.com/in/pranshu-sen-37a63a196/"
                            target="_blank">

                            linkedin.com/in/pranshu-sen-37a63a196

                        </a>

                    </div>

                    <div class="info-card">

                        <h3>💻 GitHub</h3>

                        <a
                            href="https://github.com/pranshu7489768236"
                            target="_blank">

                            github.com/pranshu7489768236

                        </a>

                    </div>

                    <div class="info-card">

                        <h3>📍 Location</h3>

                        <p>

                            Bengaluru, Karnataka, India

                        </p>

                    </div>

                </div>

                <!-- RIGHT -->

                <div class="contact-form">

                    <form id="contactForm">

                        <div class="form-group">

                            <input
                                type="text"
                                placeholder="Your Name"
                                required>

                        </div>

                        <div class="form-group">

                            <input
                                type="email"
                                placeholder="Your Email"
                                required>

                        </div>

                        <div class="form-group">

                            <input
                                type="text"
                                placeholder="Subject">

                        </div>

                        <div class="form-group">

                            <textarea
                                rows="6"
                                placeholder="Write your message..."
                                required></textarea>

                        </div>

                        <button
                            type="submit"
                            class="send-btn">

                            Send Message

                        </button>

                    </form>

                </div>

            </div>

        </div>

    </section>

    `;

}