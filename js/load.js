var begin = 0; //new Date().getTime();
var end = 0;

try {	
	document.addEventListener("DOMContentLoaded", (function() {
		begin = new Date().getTime();		
	})());
	document.addEventListener("load", (function() {
		end = new Date().getTime(); 
	})());
	window.onload = function() {	
		load = (end - begin);
		newText = document.createTextNode("Loaded in " + load.toString() + " ms");
		document.getElementsByTagName("FOOTER")[0].appendChild(newText);
	
		loc = document.location.toString().split("/");
		loc = loc[loc.length - 1]
		var menuItems = document.getElementById("headmenu").getElementsByTagName("A");
		switch(loc)
		{
		case "index.html" : menuItems[0].style.background = "#AAAAAA"; break;
		case "info.html" : menuItems[1].style.background = "#AAAAAA"; break;
		case "blank.html" : menuItems[2].style.background = "#AAAAAA"; break;
		}
	};
}
catch(err)
{
	alert(err)
}
