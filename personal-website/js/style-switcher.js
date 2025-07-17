/* ================== toggle style switcher ========================== */
const styleSwitcherToggler = document.querySelector('.style-switcher-toggler');
styleSwitcherToggler.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
})

// hide style switcher on scroll
window.addEventListener('scroll', () => {
    if(document.querySelector('.style-switcher').classList.contains('open')) {
        document.querySelector('.style-switcher').classList.remove('open');
    }
})


/* ================== Theme colors ========================== */
const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
    alternateStyles.forEach(style => {
        if(color === style.getAttribute('title')) {
            style.removeAttribute('disabled')
        } else {
            style.setAttribute('disabled', 'true')
        }
    })
}

/* ================== Theme light and dark mode ========================== */
const dayNight = document.querySelector('.day-night');
const icon = dayNight.querySelector('i');

dayNight.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

window.addEventListener('load', () => {
    if(document.body.classList.contains('dark')) {
        icon.classList.add('fa-sun');
    } else {
        icon.classList.add('fa-moon');
    }
});

