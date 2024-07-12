document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.querySelector('.dark_mode');
    const body = document.body;

    // Check if the user has a preferred mode stored in localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.add('light-mode');
    }

    darkModeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
});