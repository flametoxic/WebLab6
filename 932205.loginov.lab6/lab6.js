function left_button() {
	var elem = document.getElementsByClassName("left_column");
	for(var i=0; i<elem.length; i++) elem[i].style.width='870px';
	var elem = document.getElementsByClassName("right_column");
	for(var i=0; i<elem.length; i++) elem[i].style.width='30px';
	var elem = document.getElementsByClassName("img1");
	for(var i=0; i<elem.length; i++) elem[i].style.width='600px';
	var elem = document.getElementsByClassName("img2");
	for(var i=0; i<elem.length; i++) elem[i].style.width='0px';	
}
function mid_button() {
	var elem = document.getElementsByClassName("left_column");
	for(var i=0; i<elem.length; i++) elem[i].style.width='450px';
	var elem = document.getElementsByClassName("right_column");
	for(var i=0; i<elem.length; i++) elem[i].style.width='450px';
	var elem = document.getElementsByClassName("img1");
	for(var i=0; i<elem.length; i++) elem[i].style.width='400px';
	var elem = document.getElementsByClassName("img2");
	for(var i=0; i<elem.length; i++) elem[i].style.width='400px';	
}
function right_button() {
	var elem = document.getElementsByClassName("left_column");
	for(var i=0; i<elem.length; i++) elem[i].style.width='30px';
	var elem = document.getElementsByClassName("right_column");
	for(var i=0; i<elem.length; i++) elem[i].style.width='870px';
	var elem = document.getElementsByClassName("img1");
	for(var i=0; i<elem.length; i++) elem[i].style.width='0px';
	var elem = document.getElementsByClassName("img2");
	for(var i=0; i<elem.length; i++) elem[i].style.width='600px';	
}