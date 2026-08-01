export function initNavigation() {

    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");

    if (!menuToggle || !navigation) return;

    // Open / Close Menu
    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");
        navigation.classList.toggle("open");

    });

    // Close when clicking menu item
    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");
            navigation.classList.remove("open");

        });

    });

    // Close when clicking outside
    document.addEventListener("click", (event) => {

        if (
            !navigation.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            menuToggle.classList.remove("active");
            navigation.classList.remove("open");

        }

    });

}