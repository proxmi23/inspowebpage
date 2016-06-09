function changer() {
	var element = document.getElementById("appear");
	var text = "everything is only temporary";
	if (element.innerHTML == "") {
		element.innerHTML = text;
	}
	else {
		element.innerHTML = "";
	}
}