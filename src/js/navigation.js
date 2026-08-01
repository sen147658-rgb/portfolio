export function initNavigation() {

    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");
    const overlay = document.getElementById("menuOverlay");

    if (!menuToggle || !navigation || !overlay) return;

    function openMenu() {

        navigation.classList.add("open");
        overlay.classList.add("active");
        menuToggle.classList.add("active");

        document.body.style.overflow = "hidden";

    }

    function closeMenu() {

        navigation.classList.remove("open");
        overlay.classList.remove("active");
        menuToggle.classList.remove("active");

        document.body.style.overflow = "";

    }

    menuToggle.addEventListener("click", () => {

        if (navigation.classList.contains("open")) {

            closeMenu();

        } else {

            openMenu();

        }

    });

    overlay.addEventListener("click", closeMenu);

    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            closeMenu();

        });

    });

    window.addEventListener("resize", () => {

        if (window.innerWidth > 900) {

            closeMenu();

        }

    });

    window.addEventListener("scroll", () => {

        const navbar = document.querySelector(".navbar");

        if (!navbar) return;

        if (window.scrollY > 20) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

}