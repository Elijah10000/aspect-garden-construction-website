
		// Toggle Dark Mode
		function darkModeToggle() {
			
			let isDarkMode = localStorage.getItem('darkModeOn');

			if(!isDarkMode){
				localStorage.setItem("darkModeOn", "true");
			} else {
				localStorage.removeItem("darkModeOn");
			}
			
			
			let body = document.body;
			body.classList.toggle("dark-mode");
				
			const grad1 = document.querySelector(".box-parent").parentNode;
			grad1.classList.toggle('grad1');
		}
		
		
		//Check For Dark Mode
		function setDarkMode() {
			let isDarkMode = localStorage.getItem('darkModeOn');
			
			if(isDarkMode) {
			let body = document.body;
			body.classList.toggle("dark-mode");
				
			const grad1 = document.querySelector(".box-parent").parentNode;
			grad1.classList.toggle('grad1');
			}
		
		}
		
		const darkModeButton = document.querySelector('.dark-mode-button');

		window.addEventListener('load', setDarkMode);
		
		if(darkModeButton) {
			darkModeButton.addEventListener('click', darkModeToggle);
		};
	