/* =========================================================
   AIM CONCEPTION
   JAVASCRIPT PRINCIPAL
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MENU HAMBURGER
       ===================================================== */

    const menuButton =
        document.querySelector(".menu-btn");

    const dropdownMenu =
        document.querySelector(".dropdown-menu");


    if (menuButton && dropdownMenu) {


        /* OUVRIR / FERMER */

        menuButton.addEventListener("click", function (event) {

            event.stopPropagation();

            const isOpen =
                menuButton.getAttribute("aria-expanded")
                === "true";

            menuButton.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );

            dropdownMenu.classList.toggle(
                "open",
                !isOpen
            );

        });


        /* EMPÊCHER LE CLIC DANS LE MENU DE LE FERMER */

        dropdownMenu.addEventListener(
            "click",
            function (event) {
                event.stopPropagation();
            }
        );


        /* CLIC EN DEHORS */

        document.addEventListener(
            "click",
            function () {

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                dropdownMenu.classList.remove("open");

            }
        );


        /* TOUCHE ÉCHAP */

        document.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Escape") {

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    dropdownMenu.classList.remove(
                        "open"
                    );

                    menuButton.focus();
                }

            }
        );


        /* CLIC SUR UN LIEN */

        const menuLinks =
            dropdownMenu.querySelectorAll("a");

        menuLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    dropdownMenu.classList.remove(
                        "open"
                    );

                }
            );

        });

    }


    /* =====================================================
       SCROLL FLUIDE
       ===================================================== */

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchorLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (!target) {
                    return;
                }

                event.preventDefault();

                const header =
                    document.querySelector("header");

                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;

                const position =
                    target.getBoundingClientRect().top
                    + window.scrollY
                    - headerHeight
                    - 15;

                window.scrollTo({
                    top: position,
                    behavior: "smooth"
                });

            }
        );

    });


    /* =====================================================
       ANNÉE AUTOMATIQUE
       ===================================================== */

    const year =
        new Date().getFullYear();

    const yearElement =
        document.querySelector("#annee");

    if (yearElement) {
        yearElement.textContent = year;
    }


    /* =====================================================
       LIEN ACTIF DU MENU
       ===================================================== */

    if (dropdownMenu) {

        const currentPath =
            window.location.pathname
                .split("/")
                .pop()
                .toLowerCase();


        const links =
            dropdownMenu.querySelectorAll("a");


        links.forEach(function (link) {

            const href =
                link.getAttribute("href");

            if (!href) {
                return;
            }

            if (
                href.startsWith("#") ||
                href.startsWith("http") ||
                href.startsWith("tel:") ||
                href.startsWith("mailto:")
            ) {
                return;
            }

            const page =
                href
                    .split("/")
                    .pop()
                    .split("?")[0]
                    .split("#")[0]
                    .toLowerCase();


            if (
                page &&
                page === currentPath
            ) {
                link.classList.add("active");
            }

        });

    }


    /* =====================================================
       ANIMATION DES CARTES
       ===================================================== */

    const animatedElements =
        document.querySelectorAll(
            ".service-card, .step, .avantage, .blog-card"
        );


    if (
        animatedElements.length &&
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "is-visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        animatedElements.forEach(
            function (element) {

                element.classList.add(
                    "scroll-animation"
                );

                observer.observe(element);

            }
        );

    }


    /* =====================================================
       FERMETURE MENU AU REDIMENSIONNEMENT
       ===================================================== */

    window.addEventListener(
        "resize",
        function () {

            if (
                window.innerWidth > 768 &&
                menuButton &&
                dropdownMenu
            ) {

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                dropdownMenu.classList.remove(
                    "open"
                );

            }

        }
    );


    /* =====================================================
       CONSOLE
       ===================================================== */

    console.log(
        "AIM Conception — JavaScript chargé."
    );

});
