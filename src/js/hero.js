export function initHeroAnimation() {

    initTypingEffect();

    initRevealAnimation();

    initMouseGlow();

}

/* ======================================
   Typing Effect
====================================== */

function initTypingEffect() {

    const role = document.querySelector(".hero-role");

    if (!role) return;

    const text = role.textContent.trim();

    role.textContent = "";

    let index = 0;

    function type() {

        if (index < text.length) {

            role.textContent += text.charAt(index);

            index++;

            setTimeout(type, 60);

        }

    }

    setTimeout(type, 600);

}

/* ======================================
   Reveal Animation
====================================== */

function initRevealAnimation() {

    const elements = [

        ".hero-badge",

        ".hero-subtitle",

        ".hero-title",

        ".hero-role",

        ".hero-description",

        ".hero-skills",

        ".hero-buttons",

        ".profile-ring"

    ];

    elements.forEach((selector, i) => {

        const element = document.querySelector(selector);

        if (!element) return;

        element.style.opacity = "0";

        element.style.transform = "translateY(40px)";

        element.style.transition = "all .8s ease";

        setTimeout(() => {

            element.style.opacity = "1";

            element.style.transform = "translateY(0px)";

        }, 250 * i);

    });

}

/* ======================================
   Mouse Glow
====================================== */

function initMouseGlow() {

    let glow = document.querySelector(".cursor-glow");

    if (!glow) {

        glow = document.createElement("div");

        glow.className = "cursor-glow";

        document.body.appendChild(glow);

    }

    document.addEventListener("mousemove", (e) => {

        glow.style.left = e.clientX + "px";

        glow.style.top = e.clientY + "px";

    });

}