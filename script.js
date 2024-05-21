document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// JavaScript to add a class when scrolling down, removing it when scrolling back to the top
// window.addEventListener('scroll', function() {
//     const navbar = document.getElementById('navbar');
//     if (window.scrollY > 0) {
//         navbar.classList.add('sticky');
//     } else {
//         navbar.classList.remove('sticky');
//     }
// });