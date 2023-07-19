
window.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.sticky-nav-link');
    function handleClick(event) {
        event.preventDefault();
        // Reset all links to default color
        navLinks.forEach(link => {
            link.classList.remove('active');

        });

        // Set the clicked link as active
        event.target.classList.add('active');

    }

    // Attach click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', handleClick);
    });
});

// By default, apply active class to the first link
window.addEventListener('DOMContentLoaded', () => {
    const firstLink = document.querySelector('.sticky-nav-link');

    firstLink.classList.add('active');

});
