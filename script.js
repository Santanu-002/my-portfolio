const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close-btn");
const quickLinks = document.querySelectorAll(".quick-links a")
hamburger.addEventListener("click", function() {
    menu.style.display = "block";
});

closeBtn.addEventListener("click", function() {
    menu.style.display = "none";
});

quickLinks.forEach(link => {
    link.addEventListener("click", function() {
        menu.style.display = "none";
    });
});
