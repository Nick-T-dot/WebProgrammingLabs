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
	
		var loc = document.location.toString().split("/");
		loc = loc[loc.length - 1].replace('\?', '')
		var menuItems = document.getElementById("headmenu").getElementsByTagName("A");
		var len = menuItems.length;
		var st = "";
		let match = 0;
		
		for (var i = 0; i < len; i++)
		{
			st = menuItems[i].href.toString().split("/");
			st = st[st.length - 1]

			if (st == loc)	
			{
				menuItems[i].classList.add("actmenu");
				match = 1;
			}
		}
		if (match == 0)
		{
			menuItems[0].classList.add("actmenu");
		}
	};
}
catch(err)
{
	alert(err)
}
