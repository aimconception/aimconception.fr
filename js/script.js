/* =========================================================
   AIM CONCEPTION
   script.js
   Menu + navigation + petits comportements du site
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MENU PRINCIPAL
       ===================================================== */

    const menuButton = document.querySelector(".menu-btn");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    if (menuButton && dropdownMenu) {

        /* -----------------------------------------------
           Ouvrir / fermer le menu
           ----------------------------------------------- */

        menuButton.addEventListener("click", function (event) {

            event.stopPropagation();

            const isOpen =
                menuButton.getAttribute("aria-expanded") === "true";

            menuButton.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );

            dropdownMenu.classList.toggle("open", !isOpen);
        });


        /* -----------------------------------------------
           Empêcher le clic dans le menu de fermer
           immédiatement le menu
           ----------------------------------------------- */

        dropdownMenu.addEventListener("click", function (event) {
            event.stopPropagation();
        });


        /* -----------------------------------------------
           Fermer le menu en cliquant ailleurs
           ----------------------------------------------- */

        document.addEventListener("click", function () {

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            dropdownMenu.classList.remove("open");
        });


        /* -----------------------------------------------
           Fermer avec la touche Échap
           ----------------------------------------------- */

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                dropdownMenu.classList.remove("open");

                menuButton.focus();
            }
        });


        /* -----------------------------------------------
           Fermer le menu après avoir cliqué sur un lien
           ----------------------------------------------- */

        const menuLinks =
            dropdownMenu.querySelectorAll("a");

        menuLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                dropdownMenu.classList.remove("open");
            });

        });

    }


    /* =====================================================
       LIENS ANCRES — SCROLL FLUIDE
       ===================================================== */

    const anchorLinks =
        document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#" ||
                targetId.length < 2
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
                header ? header.offsetHeight : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight -
                15;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
       ANNÉE AUTOMATIQUE DANS LE FOOTER
       ===================================================== */

    const yearElements =
        document.querySelectorAll(
            "#annee, .annee-actuelle"
        );

    const currentYear =
        new Date().getFullYear();

    yearElements.forEach(function (element) {
        element.textContent = currentYear;
    });


    /* =====================================================
       FERMETURE DU MENU APRÈS UN REDIMENSIONNEMENT
       ===================================================== */

    window.addEventListener("resize", function () {

        if (
            window.innerWidth > 768 &&
            menuButton &&
            dropdownMenu
        ) {

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            dropdownMenu.classList.remove("open");
        }

    });


    /* =====================================================
       AJOUT AUTOMATIQUE DE LA CLASSE ACTIVE
       AU LIEN CORRESPONDANT À LA PAGE ACTUELLE
       ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();

    if (dropdownMenu) {

        const links =
            dropdownMenu.querySelectorAll("a");

        links.forEach(function (link) {

            const linkUrl =
                link.getAttribute("href");

            if (!linkUrl) {
                return;
            }

            /*
             * On ignore les liens avec #
             * ou les liens externes.
             */

            if (
                linkUrl.startsWith("#") ||
                linkUrl.startsWith("http://") ||
                linkUrl.startsWith("https://") ||
                linkUrl.startsWith("mailto:") ||
                linkUrl.startsWith("tel:")
            ) {
                return;
            }

            const linkPage =
                linkUrl
                    .split("/")
                    .pop()
                    .split("?")[0]
                    .split("#")[0]
                    .toLowerCase();

            if (
                linkPage &&
                linkPage === currentPage
            ) {
                link.classList.add("active");
            }

        });

    }


    /* =====================================================
       ANIMATION LÉGÈRE DES ÉLÉMENTS AU SCROLL
       ===================================================== */

    const animatedElements =
        document.querySelectorAll(
            ".service-card, .step, .avantage, .blog-card"
        );

    /*
     * Si IntersectionObserver est disponible,
     * on ajoute une petite animation.
     */

    if (
        animatedElements.length > 0 &&
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                function (entries, observerInstance) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "is-visible"
                            );

                            observerInstance.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );

        animatedElements.forEach(function (element) {

            element.classList.add(
                "scroll-animation"
            );

            observer.observe(element);

        });

    }


    /* =====================================================
       TELEPHONE / WHATSAPP
       ===================================================== */

    /*
     * Rien à faire ici :
     *
     * <a href="tel:+33683545008">
     *
     * et
     *
     * <a href="https://wa.me/33683545008">
     *
     * fonctionnent directement dans le navigateur.
     */


    /* =====================================================
       ACCESSIBILITÉ
       ===================================================== */

    if (menuButton && dropdownMenu) {

        menuButton.setAttribute(
            "aria-expanded",
            menuButton.getAttribute("aria-expanded") === "true"
                ? "true"
                : "false"
        );

    }


    /* =====================================================
       LOG DE DÉVELOPPEMENT
       ===================================================== */

    console.log(
        "AIM Conception — site chargé correctement."
    );

});
