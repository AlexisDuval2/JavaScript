
///////////////////////////////////
// fonction principale
///////////////////////////////////
window.onload = () => {

	animerLeTitre();
	controlerCarre();
}

///////////////////////////////////
// fonction pour animer le titre
///////////////////////////////////
const animerLeTitre = () => {

	const delai = 60;
	const valeurDeControle = 96;
	const couleur1 = "rgb(88,200,1)";
	const couleur2 = "rgb(181,11,111)";

	let titre = document.querySelector("h1");

	titre.style.color = couleur1;

	setInterval(function () {

		let controleur = Math.random() * 100;

		if (controleur < valeurDeControle) {
			titre.style.color = couleur1;
		}
		else {
			titre.style.color = couleur2;
		}

	}, delai);
}

///////////////////////////////////
// fonction pour gérer le carré
///////////////////////////////////
const controlerCarre = () => {

	let controleur = null
	let ligne1 = document.getElementById("ligne-1");
	let anime = false;

	ligne1.onclick = () => {

		if (!anime) {
			anime = true;
			controleur = animerCarre();
		}
		else {
			anime = false;
			arreterCarre(controleur);
		}
	}
}

///////////////////////////////////
// fonction pour animer le carré
///////////////////////////////////
const animerCarre = () => {

	let controleur = null
	let ligne1 = document.getElementById("ligne-1");
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

	return controleur;
}

///////////////////////////////////
// fonction pour arrêter l'animation du carré
///////////////////////////////////
const arreterCarre = (controleur) => {

	let ligne1 = document.getElementById("ligne-1");

	clearInterval(controleur);
	ligne1.style.transform = "rotate(0deg)";
}
