/* =========================================================
   PRODUCTS PAGE JAVASCRIPT
   شركة الأمل لحلول التبريد
========================================================= */


/* =========================================================
   MOBILE NAVBAR
========================================================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");


/* =========================
   OPEN / CLOSE MENU
========================= */

if (menuButton && navLinks) {

    menuButton.addEventListener("click", function (event) {

        event.stopPropagation();

        navLinks.classList.toggle("show");

    });


    /* =========================
       CLOSE MENU AFTER CLICK
       ON A LINK
    ========================= */

    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");

        });

    });


    /* =========================
       CLOSE MENU WHEN CLICKING
       OUTSIDE NAVBAR
    ========================= */

    document.addEventListener("click", function (event) {

        if (!event.target.closest(".navbar")) {

            navLinks.classList.remove("show");

        }

    });

}


/* =========================================================
   VIDEOS
========================================================= */


/* Get all videos */

const videos = document.querySelectorAll(".video-card video");


/* =========================================================
   PREVENT AUTOPLAY
========================================================= */

videos.forEach(function (video) {

    video.autoplay = false;

});


/* =========================================================
   VIDEO CONTROLS
========================================================= */

videos.forEach(function (video) {


    /* =========================
       GET VIDEO CONTAINER
    ========================= */

    const videoContainer =
        video.closest(".video-container");


    /* =========================
       GET PLACEHOLDER
    ========================= */

    const placeholder =
        videoContainer
            ? videoContainer.querySelector(".video-placeholder")
            : null;


    /* =====================================================
       VIDEO LOADED
    ===================================================== */

    video.addEventListener("loadeddata", function () {

        if (placeholder) {

            placeholder.style.display = "none";

        }

    });


    /* =====================================================
       WHEN VIDEO STARTS PLAYING
    ===================================================== */

    video.addEventListener("play", function () {


        /* =========================
           STOP ALL OTHER VIDEOS
        ========================= */

        videos.forEach(function (otherVideo) {

            if (otherVideo !== video) {

                otherVideo.pause();

            }

        });


        /* =========================
           HIDE PLACEHOLDER
        ========================= */

        if (placeholder) {

            placeholder.style.display = "none";

        }

    });


    /* =====================================================
       VIDEO ERROR
    ===================================================== */

    video.addEventListener("error", function () {

        if (placeholder) {

            placeholder.style.display = "flex";

        }

    });

});