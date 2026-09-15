const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const navbar = document.querySelector(".navbar");


// فتح وقفل القائمة في الموبايل
menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});


// إغلاق القائمة بعد الضغط على أي رابط
const links = navLinks.querySelectorAll("a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
    });
});


// تغيير شكل الـ Navbar أثناء النزول
window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});