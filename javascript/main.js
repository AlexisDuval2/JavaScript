
const delai = 42;
const valeurPrChanger = 75;
let acceleration = 1;
let vitesse = 21;

window.onload = () => {

	let degres = 0;
	let ligne1 = document.getElementById("ligne-1");

	ligne1.onclick = () => {

		setInterval(function() {

			vitesse += acceleration;
			degres += vitesse;
			degres %= 360;
			ligne1.style.transform = "rotate(" + degres + "deg)";

			if (vitesse > valeurPrChanger) {acceleration = -1;}
			else if (vitesse < -valeurPrChanger) {acceleration = 1;}

			console.log(vitesse);

		}, delai);
	}
}
