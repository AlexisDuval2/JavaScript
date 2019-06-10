
///////////////////////////////////
// variables globales
///////////////////////////////////
let ligne1 = null;
let controleur = null

///////////////////////////////////
// fonction principale
///////////////////////////////////
window.onload = () => {

	ligne1 = document.getElementById("ligne-1");
	controlerCarre();
}

///////////////////////////////////
// fonction pour gérer le carré
///////////////////////////////////
const controlerCarre = () => {

	let anime = false;

	ligne1.onclick = () => {

		if (!anime) {
			anime = true;
			animerCarre();
		}
		else {
			anime = false;
			arreterCarre();
		}
	}
}

///////////////////////////////////
// fonction pour animer le carré
///////////////////////////////////
const animerCarre = () => {

	const delai = 42;
	const valeurPrChanger = 75;
	let acceleration = 1;
	let vitesse = 21;
	let degres = 0;

	controleur = setInterval(function () {

		vitesse += acceleration;
		degres += vitesse;
		degres %= 360;
		ligne1.style.transform = "rotate(" + degres + "deg)";

		if (vitesse > valeurPrChanger) { acceleration = -1; }
		else if (vitesse < -valeurPrChanger) { acceleration = 1; }

	}, delai);
}

///////////////////////////////////
// fonction pour arrêter l'animation du carré
///////////////////////////////////
const arreterCarre = () => {

	clearInterval(controleur);
}
