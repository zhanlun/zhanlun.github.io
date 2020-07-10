// Using wall.js, for full page effect
var wall = new Wall('#wall', {
	loopToTop: true,
	easeFunction: 'easeIn'
});
document.querySelectorAll('.prev').forEach((elem) => {
	elem.addEventListener('click', function () { wall.prevSection(); });
});
document.querySelectorAll('.next').forEach((elem) => {
	elem.addEventListener('click', function () { wall.nextSection(); });
});


// For typewriter effect
class TypeWriter {
	constructor(txtElement, words, wait = 3000) {
		this.txtElement = txtElement;
		this.words = words;
		this.txt = '';
		this.wordIndex = 0;
		this.wait = parseInt(wait, 10);
		this.type();
		this.isDeleting = false;
	}

	type() {
		// Current index of word
		const current = this.wordIndex % this.words.length;
		// Get full text of current word
		const fullTxt = this.words[current];

		// Check if deleting
		if (this.isDeleting) {
			// Remove a char
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			// Add a char
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		// Insert txt into element
		this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

		// Initial type speed
		let typeSpeed = 100;

		if (this.isDeleting) {
			typeSpeed /= 2;
		}

		// If word is complete
		if (!this.isDeleting && this.txt === fullTxt) {
			// Make pause at end
			typeSpeed = this.wait;
			// Set delete true
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			// Move to next word
			this.wordIndex++;
			// Pause before start typing
			typeSpeed = 200;
		} 


		setTimeout(() => this.type(), typeSpeed);
	}
}


// Init on DOM load
document.addEventListener('DOMContentLoaded', init);



// Init App
function init() {
	const txtElement = document.querySelector('.txt-type');
	// const words = JSON.parse(txtElement.getAttribute('data-words'));
	const wait = txtElement.getAttribute('data-wait');
	const words = [
		'"web": [ASP.NET, PHP, JS ...]', 
		'"analytics": [Python, Tableau, ...]',
		'"others": [Git, Linux, UML ...]'
	]
	// Init Typewriter
	new TypeWriter(txtElement, words, wait);
}