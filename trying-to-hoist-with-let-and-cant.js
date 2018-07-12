let myvar = 'global value';

(function() {
	console.log(myvar);

	let myvar = 'local value';

	console.log(myvar);
})();