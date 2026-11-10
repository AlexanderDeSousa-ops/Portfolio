

// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");


// Open and close the navigation menu

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    // Update the accessibility information

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    // Change the menu icon

    if (isOpen) {

        menuToggle.textContent = "✕";

        menuToggle.setAttribute("aria-label", "Close navigation menu");

    } else {

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-label", "Open navigation menu");

    }

});


// Close the navigation menu when a link is clicked

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Open navigation menu");

    });

});



// ACTIVE NAVIGATION LINK

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function() {

    let currentSection = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 150) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});



// BACK TO TOP BUTTON


const backToTop = document.getElementById("back-to-top");


// Show the button when scrolling down

window.addEventListener("scroll", function() {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


// Return to the top when clicked

backToTop.addEventListener("click", function() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



// AUTOMATIC COPYRIGHT YEAR

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();
