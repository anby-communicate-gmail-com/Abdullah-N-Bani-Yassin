const home = document.getElementById('home-id');

	
	window.addEventListener('scroll', () => {
	if (window.scrollY == 75 && window.scrollY < 75) {
		 home.classList.add('active-nav-color');
	} else {
				nav.classList.remove('active-nav-color');
			}
	})
