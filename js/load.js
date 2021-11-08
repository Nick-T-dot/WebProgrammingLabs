var begin = 0; //new Date().getTime();
var end = 0;

try {	
	document.addEventListener("DOMContentLoaded", (function() {
		begin = new Date().getTime();		
	})());
	window.onload = function() {
		end = new Date().getTime();		
		load = (end - begin);
		newText = document.createTextNode("Loaded in " + load.toString() + " ms");
		document.getElementsByTagName("FOOTER")[0].appendChild(newText);
	
		let loc = document.location.toString().split("/");
		let loc = loc[loc.length - 1]
		var menuItems = document.getElementById("headmenu").getElementsByTagName("A");
		switch(loc)
		{
		case "index.html" : menuItems[0].classList.add(".actmenu"); break;
		case "info.html" : menuItems[1].classList.add(".actmenu"); break;
		case "blank.html" : menuItems[2].classList.add(".actmenu"); break;
		}
	};
}
catch(err)
{
	alert(err)
}
