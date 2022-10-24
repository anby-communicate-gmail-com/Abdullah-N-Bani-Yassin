const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
if (window.scrollY >= 75) {
     nav.classList.add('active_nav');
} else {
            nav.classList.remove('active_nav');
        }
})

			