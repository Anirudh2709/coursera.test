const hellospk = {
	speakWord: 'Hello',	
};
(function () {
	helloSpk.speak = function (userName) {
		return (helloSpk.speakWord + " " + userName);
	}
}());


const byeSpeaker = {
	speakWord: 'Good Bye'
};

(function () {
	byeSpeaker.speak = function (userName) {
		return (byeSpeaker.speakWord + " " + userName);
	}
}());


(function () {
	var names = ['jagdish','jignesh','anni','jimmy','jordan','tony','stark'];
	for (var i = 0; i < names.length; i++) {
		var name = names[i];
		var firstLetter = name.charAt(0).toLowerCase();
		if (firstLetter === 'j') {
			console.log(byeSpeaker.speak(name));
			document.write(byeSpeaker.speak(name) + '<br>');
		} else {
			console.log(helloSpk.speak(name));
			document.write(helloSpk.speak(name + '<br>'));
		}
	}
})();
