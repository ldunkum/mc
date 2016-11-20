var e = document.getElementById('animated');
/*
e.addEventListener("animationstart", listener);
e.addEventListener("animationend", listener);
e.addEventListener("animationiteration", listener);
*/
//e.className = "rotating";

function listener(evt) {
	//console.log(evt);
	switch (evt.type) {
		case "animationstart":
			e.innerHTML = "1";
			console.log("Started.");
			break;
		case "animationend":
			e.innerHTML = e.innerHTML + " terminado";
			console.log("Ended." + e.innerHTML);
			break;
		case "animationiteration":
			e.innerHTML = parseInt(e.innerHTML) + 1;
			console.log(e.innerHTML);
			break;
	}

}