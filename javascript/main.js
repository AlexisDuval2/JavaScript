
window.onload = () => {

	let degres = 7;

	let ligne1 = document.getElementById("ligne-1");

	ligne1.onclick = () => {
		degres += 7;
		ligne1.style.transform = "rotate(" + degres + "deg)";
	}
}
