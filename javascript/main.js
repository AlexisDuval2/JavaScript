
let ligne1 = null;

window.onload = () => {
	ligne1 = document.getElementById("ligne-1");
	animerCarre();
}

const animerCarre = () => {

	ligne1.onclick = () => {

		const delai = 42;
		const valeurPrChanger = 75;
		let acceleration = 1;
		let vitesse = 21;
		let degres = 0;

		setInterval(function () {

			vitesse += acceleration;
			degres += vitesse;
			degres %= 360;
			ligne1.style.transform = "rotate(" + degres + "deg)";

			if (vitesse > valeurPrChanger) { acceleration = -1; }
			else if (vitesse < -valeurPrChanger) { acceleration = 1; }

		}, delai);

	}
}
