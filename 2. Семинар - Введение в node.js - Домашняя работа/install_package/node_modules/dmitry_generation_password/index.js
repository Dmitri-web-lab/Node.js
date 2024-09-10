function easyPassword() {
	let numbers = [1,2,3,4,5,6,7,8];
	let outPassword ='';
	
	for (let i = 0; i <= 14; i++) {
	let randomNumber = Math.random() * numbers.length
	let addCharacter = randomNumber.toFixed()
	
	if (addCharacter < numbers.length-1) {
		outPassword += numbers[addCharacter]
	}
	}
	return outPassword;
	}
	
	function mediumPassword() {
	let characterSet = [1,'r','T','y',2,'N'];
	let outPassword ='';
	
	for (let i = 0; i <= 14; i++) {
	let randomNumber = Math.random() * characterSet.length
	let addCharacter = randomNumber.toFixed()
	
	if (addCharacter < characterSet.length-1) {
		outPassword += characterSet[addCharacter]
	}
	}
	return outPassword;
	}

	module.exports = { easyPassword, mediumPassword }