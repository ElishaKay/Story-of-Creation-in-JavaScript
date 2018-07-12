var myvar = 'global value';

(function() {
	console.log(myvar);

	var myvar = 'local value';

	console.log(myvar);
})();