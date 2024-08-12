document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('open');
        navMenu.classList.toggle('open');
    });
});


document.addEventListener('scroll', () => {
    const scrollLine = document.querySelector('.scroll-line');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollRatio = scrollTop / documentHeight;
    scrollLine.style.top = `${scrollRatio * (window.innerHeight - scrollLine.offsetHeight)}px`;
});

/* main */
/* main */


document.addEventListener('DOMContentLoaded', () => {
    // Optional JavaScript for interactions can be added here
});


/* main */
/* main */
document.addEventListener('DOMContentLoaded', () => {
    const joinButton = document.getElementById('joinButton');

    joinButton.addEventListener('click', () => {
        alert('Welcome to our fitness community! Get ready to achieve your goals.');
    });
});
/* main */
/* main */

