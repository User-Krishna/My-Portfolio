/* script for about section */
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    // Remove active class from all tabs
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    // Add active class to the clicked tab and corresponding content
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

/* Contact section form */
const scriptURL = 'https://script.google.com/macros/s/AKfycbyruGvhNBkWuhK9jQstNflDNz0Zf6ssdvgu7DVn9pNaE49ytip_NGi6H9bK_alT8Ft3/exec';
const form = document.forms['contact-form'];
const messageDiv = document.getElementById('thank-you-message'); // Add this div in HTML for the message

form.addEventListener('submit', e => {
    e.preventDefault();

    // Show the confirmation message immediately after submit
    messageDiv.style.display = "block"; // Show the message div
    messageDiv.innerHTML = "Thank You! Your Form is submitted successfully."; // Custom message

    // Submit the form data in the background
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // After submission, optionally reload the page or change the message
            setTimeout(() => {
                messageDiv.innerHTML = "Your form was successfully submitted."; // Optionally update the message
                window.location.reload(); // Reload the page after a short delay
            }, 2000); // Adjust delay time if needed
        })
        .catch(error => {
            messageDiv.innerHTML = ""; // Error message
            console.error('Error!', error.message);
        });
});

/* Time setting script */
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let currentTime = new Date();
    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);

/* Toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* Scroll sections active link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /* Sticky navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove toggle icon and navbar when clicking navbar link (scroll) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* Scroll reveal */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .sub-title, .heading', { origin: 'top' });
ScrollReveal().reveal('.contents, .about-col-1, .services-container, .portfolio-box, .social-icons, .col, .contact-right', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content p', { origin: 'right' });

/* Typed JS for dynamic text */
const typed = new Typed('.multiple-text', {
    strings: ['Student Of GNIT', 'Web Developer', 'Graphic Designer', 'Software Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const typed1 = new Typed('.cool', {
    strings: ['My Creative Side is My Strongest Side.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* Color change in home page script */
var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "images/sun.png";
    } else {
        icon.src = "images/moon.png";
    }
};
