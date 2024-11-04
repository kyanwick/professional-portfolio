document.addEventListener('DOMContentLoaded', () => {
    const themeToggleDev = document.getElementById('theme-toggle-dev');
    const themeIconDev = document.getElementById('theme-icon-dev');

    // Check for saved theme on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIconDev.classList.remove('fa-sun');
        themeIconDev.classList.add('fa-moon');
    }

    // Toggle theme function
    function toggleTheme() {
        document.body.classList.toggle('dark-mode');

        // Change icon based on theme
        if (document.body.classList.contains('dark-mode')) {
            themeIconDev.classList.remove('fa-sun');
            themeIconDev.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark'); // Save theme to localStorage
        } else {
            themeIconDev.classList.remove('fa-moon');
            themeIconDev.classList.add('fa-sun');
            localStorage.setItem('theme', 'light'); // Save theme to localStorage
        }
    }

    // Add event listener for the theme toggle button
    themeToggleDev.addEventListener('click', toggleTheme);
});




document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        // Toggle icon between bars and times
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('nav') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });
});