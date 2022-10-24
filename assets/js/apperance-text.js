const nav = document.getElementById('sec-2-ul');

        window.addEventListener('scroll', () => {
            if (window.scrollY >= 500) {
                nav.classList.add('sec-2-ani-text');
            }
        })