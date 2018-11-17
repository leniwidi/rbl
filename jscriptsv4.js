var randomnumber = setInterval(randomuser,6000);

var getresources = 13693369;
var resourcestime = setInterval(resourcesupdate,100);

var today = new Date().toLocaleDateString('en-US', {  
    day : 'numeric',
    month : 'short',
    year : 'numeric'
}).split(' ').join(' ');

setTimeout(toolupdated, 100);

function toolupdated() {
	document.getElementById("date").innerHTML = today;
}

function move() {
	var username = document.getElementById("username").value;
	var device = document.getElementById("device").value;
	var robux = document.getElementById("robux").value;
	var tix = document.getElementById("tix").value;

	if(username == "") {
		alert("Please insert your Roblox username");
		return false;
	}

	document.getElementById("fillup").style.display = "none";
	document.getElementById("steps").style.display = "none";
	document.getElementById("comment").style.display = "none";
	document.getElementById("progressbarcontainer").style.display = "block";
	var elem = document.getElementById("progressbar");
	var width = 10;
	var id = setInterval(frame, 693);
	function frame() {
		if (width > 10 && width < 20) {
			document.getElementById("progresslog").innerHTML = "Connecting to Roblox "+device+" Server...";
			$("#gen1").fadeIn("slow");
		}

		if (width > 20 && width < 30) {
			document.getElementById("progresslog").innerHTML = "Connection to "+device+" Server Established!";
			$("#gen1").fadeOut("slow");
			$("#gen2").fadeIn("slow");
		}

		if (width > 30 && width < 40) {
			document.getElementById("progresslog").innerHTML = "Searching For Username: "+username+"";
			$("#gen2").fadeOut("slow");
			$("#gen3").fadeIn("slow");
		}

		if (width > 40 && width < 50) {
			document.getElementById("progresslog").innerHTML = "Username "+username+" is Connected!";
			$("#gen3").fadeOut("slow");
			$("#gen4").fadeIn("slow");
		}

		if (width > 50 && width < 55 && document.getElementById("shield").checked) {
			document.getElementById("progresslog").innerHTML = "Upgarding Your Account to Outrageous Builder Club For 24 Months...";
			$("#gen4").fadeOut("slow");
			$("#gen5").fadeIn("slow");
		}

		if (width > 55 && width < 60 && document.getElementById("shield").checked) {
			document.getElementById("progresslog").innerHTML = "Upgraded Successfully!";
		}

		if (width > 60 && width < 75) {
			document.getElementById("progresslog").innerHTML = "Generate "+tix+" Tix Now...";
			$("#gen5").fadeOut("slow");
			$("#gen6").fadeIn("slow");

			if (document.getElementById("addtixbarlabel").innerHTML == 0) {
				startaddtix();
			}

		}

		if (width > 75 && width < 90) {
			document.getElementById("progresslog").innerHTML = "Generate "+robux+" Robux Now...";
			$("#gen6").fadeOut("slow");
			$("#gen7").fadeIn("slow");

			if (document.getElementById("addrobuxbarlabel").innerHTML == 0) {
				startaddrobux();
			}
		}

		if (width > 90 && width < 99) {
			document.getElementById("progresslog").innerHTML = "Adding Robux & Tix to Server Now...";
			$("#gen7").fadeOut("slow");
			$("#gen1").fadeIn("slow");
		}

	    if (width >= 99) {
	    		setTimeout(verify, 1000);
			clearInterval(id);
	    } else {
			width++;
			elem.style.width = width + '%';
			document.getElementById("progressbarlabel").innerHTML = width * 1  + '%';
			}
	}
}

function verify() {
	document.getElementById("verifybg").style.height = "100%";
}

function randomuser() {
	document.getElementById("randomnumber").innerHTML = Math.floor(Math.random() * 9999);
}

function resourcesupdate() {
	document.getElementById("resources").innerHTML = getresources++;
}

function startaddtix() {
	var addtixelem = document.getElementById("addtixbar");
	var addtixwidth = 1;
	var addtixwidthid = setInterval(addtixwidthnow, 16);
	var addtixid = setInterval(addtixnow, 3);
	var addtix = 0;

	var addtixspeed = 0;

	if(document.getElementById("tix").value == 50000)
	{
		addtixspeed = 100;
	}

	if(document.getElementById("tix").value == 100000)
	{
		addtixspeed = 100;
	}

	if(document.getElementById("tix").value == 250000)
	{
		addtixspeed = 200;
	}

	if(document.getElementById("tix").value == 500000)
	{
		addtixspeed = 500;
	}

	function addtixnow() {
		if (addtix >= document.getElementById("tix").value) {
			clearInterval(addtixid);
		} else {
			addtix += addtixspeed;
			document.getElementById("addtixbarlabel").innerHTML = addtix;
		}
	}

	function addtixwidthnow() {
		if (addtixwidth >= 100) {
			clearInterval(addtixwidthid);
		} else {
			addtixwidth++;
			addtixelem.style.width = addtixwidth + '%';
		}
	}
}

function startaddrobux() {
	var addrobuxelem = document.getElementById("addrobuxbar");
	var addrobuxwidth = 1;
	var addrobuxwidthid = setInterval(addrobuxwidthnow, 16);
	var addrobuxid = setInterval(addrobuxnow, 3);
	var addrobux = 0;

	var addrobuxspeed = 0;

	if(document.getElementById("robux").value == 50000)
	{
		addrobuxspeed = 100;
	}

	if(document.getElementById("robux").value == 100000)
	{
		addrobuxspeed = 100;
	}

	if(document.getElementById("robux").value == 250000)
	{
		addrobuxspeed = 200;
	}

	if(document.getElementById("robux").value == 500000)
	{
		addrobuxspeed = 500;
	}

	function addrobuxnow() {
		if (addrobux >= document.getElementById("robux").value) {
			clearInterval(addrobuxid);
		} else {
			addrobux += addrobuxspeed;
			document.getElementById("addrobuxbarlabel").innerHTML = addrobux;
		}
	}

	function addrobuxwidthnow() {
		if (addrobuxwidth >= 100) {
			clearInterval(addrobuxwidthid);
		} else {
			addrobuxwidth++;
			addrobuxelem.style.width = addrobuxwidth + '%';
		}
	}
}