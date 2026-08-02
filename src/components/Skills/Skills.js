import "./Skills.css";

export function Skills() {

    const skills = [

        { name: "Java", value: 95 },

        { name: "Spring Boot", value: 92 },

        { name: "Microservices", value: 90 },

        { name: "Kafka", value: 82 },

        { name: "Angular", value: 80 },

        { name: "PostgreSQL", value: 88 },

        { name: "MongoDB", value: 84 },

        { name: "Docker", value: 75 },

        { name: "Git", value: 92 },

        { name: "REST APIs", value: 94 }

    ];

    return `

    <section class="skills-section">

        <div class="container">

            <div class="section-heading">

                <span class="section-tag">

                    TECHNICAL SKILLS

                </span>

                <h2>

                    My Expertise

                </h2>

                <p>

                    Technologies I've worked with professionally over the last
                    four years.

                </p>

            </div>

            <div class="skills-grid">

                ${skills.map(skill => `

                    <div class="skill-card">

                        <div class="skill-top">

                            <span>

                                ${skill.name}

                            </span>

                            <span>

                                ${skill.value}%

                            </span>

                        </div>

                        <div class="progress">

                            <div
                                class="progress-fill"
                                style="--progress:${skill.value}%">

                            </div>

                        </div>

                    </div>

                `).join("")}

            </div>

        </div>

    </section>

    `;

}