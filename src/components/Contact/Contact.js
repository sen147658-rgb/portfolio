import "./Contact.css";

export function Contact() {

    return `

    <section class="contact">

        <div class="container">

            <div class="section-header">

                <span>CONTACT</span>

                <h2>Let's Work Together</h2>

                <p>

                    Have an opportunity or want to discuss a project?
                    Feel free to reach out anytime.

                </p>

            </div>

            <div class="contact-wrapper">

                <!-- Left -->

                <div class="contact-info">

                    <div class="contact-card">

                        <div class="contact-icon">

                            📧

                        </div>

                        <div>

                            <h3>Email</h3>

                            <p>

                                pranshumca@gmail.com

                            </p>

                        </div>

                    </div>

                    <div class="contact-card">

                        <div class="contact-icon">

                            📱

                        </div>

                        <div>

                            <h3>Phone</h3>

                            <p>

                                +91 XXXXX XXXXX

                            </p>

                        </div>

                    </div>

                    <div class="contact-card">

                        <div class="contact-icon">

                            📍

                        </div>

                        <div>

                            <h3>Location</h3>

                            <p>

                                Bangalore, India

                            </p>

                        </div>

                    </div>

                    <div class="social-links">

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

                    </div>

                </div>

                <!-- Right -->

                <form class="contact-form">

                    <div class="form-group">

                        <input
                            type="text"
                            placeholder="Your Name">

                    </div>

                    <div class="form-group">

                        <input
                            type="email"
                            placeholder="Your Email">

                    </div>

                    <div class="form-group">

                        <input
                            type="text"
                            placeholder="Subject">

                    </div>

                    <div class="form-group">

                        <textarea
                            rows="6"
                            placeholder="Your Message">

                        </textarea>

                    </div>

                    <button
                        type="submit"
                        class="submit-btn">

                        Send Message

                    </button>

                </form>

            </div>

        </div>

    </section>

    `;

}