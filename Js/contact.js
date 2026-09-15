/* =========================================================
   CONTACT PAGE JAVASCRIPT
   شركة الأمل لحلول التبريد
========================================================= */


/* =========================================================
   MOBILE NAVBAR
========================================================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    // فتح / قفل القائمة
    menuButton.addEventListener("click", function (event) {
        event.stopPropagation();

        navLinks.classList.toggle("show");
    });


    // قفل القائمة عند الضغط على أي لينك
    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(function (link) {

        link.addEventListener("click", function () {
            navLinks.classList.remove("show");
        });

    });


    // قفل القائمة عند الضغط خارج الـ Navbar
    document.addEventListener("click", function (event) {

        if (!event.target.closest(".navbar")) {
            navLinks.classList.remove("show");
        }

    });

}


/* =========================================================
   CONTACT LINKS
========================================================= */

// منع أي سلوك غير مرغوب للروابط الخارجية
const externalLinks = document.querySelectorAll(
    '.contact-card[target="_blank"], .cta-secondary[target="_blank"], .footer-contact a[target="_blank"]'
);

externalLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        link.setAttribute("rel", "noopener noreferrer");

    });

});