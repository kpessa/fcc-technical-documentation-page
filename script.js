document.querySelectorAll('.main-section').forEach(function (section) {
	let a = section.querySelector('header').innerText.split` `.join`_`;
	let b = section.querySelector('header').getAttribute('id');
	console.log(a, b);
	console.log(a === b);
});
