
///////////////////////////////////
// fonction principale
///////////////////////////////////
window.onload = () => {

	animerLeFond();
	animerLeTitre();
	controlerCarre();
}

///////////////////////////////////
// fonction pour animer le fond
///////////////////////////////////
const animerLeFond = () => {

	const delai = 70;
	const limite = 0.08;
	let acceleration = 0.001;
	let vitesse = 0;
	let taille = 3;
	let corps = document.querySelector("body");

	setInterval(function () {

		vitesse += acceleration;
		taille += vitesse;

		if (vitesse > limite || vitesse < -limite) {
			acceleration *= -1;
		}

		corps.style.backgroundSize = taille + "px";

	}, delai);
}

///////////////////////////////////
// fonction pour animer le titre
///////////////////////////////////
const animerLeTitre = () => {

	const delai = 60;
	const nbPrCouleurs = 97;
	const nbPrStyle = 3;
	const couleur1 = "rgb(72, 109, 17)";
	const couleur2 = "rgb(255, 0, 212)";

	let titre = document.querySelector("h1");

	titre.style.color = couleur1;

	setInterval(function () {

		let controleur = Math.random() * 100;

		if (controleur < nbPrCouleurs) {titre.style.color = couleur1;}
		else {titre.style.color = couleur2;}

		if (controleur < nbPrStyle) {titre.style.fontStyle = "italic";}
		else {titre.style.fontStyle = "normal";}

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
	const limite = 75;
	let acceleration = 1;
	let vitesse = 21;
	let degres = 0;

	controleur = setInterval(function () {

		vitesse += acceleration;
		degres += vitesse;
		degres %= 360;
		ligne1.style.transform = "rotate(" + degres + "deg)";

		if (vitesse > limite || vitesse < -limite) {
			acceleration *= -1;
		}

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
