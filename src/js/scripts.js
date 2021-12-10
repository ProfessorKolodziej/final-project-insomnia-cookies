// Add your scripts here

let userShape = 'circle'; // Set a default shape

const button = document.querySelector('.next-button');

function transitionStep() {
	const stepTitle = document.querySelector('.step-one');
	stepTitle.style.display = 'none';
	const stepTwo = document.querySelector('.step-two');
	stepTwo.style.display = 'block';
}

button.addEventListener('click', transitionStep);

const buttonTwo = document.querySelector('.next-button-two');

function transitionStepTwo() {
	const stepTitleTwo = document.querySelector('.step-two');
	stepTitleTwo.style.display = 'none';
	const stepThree = document.querySelector('.step-three');
	stepThree.style.display = 'block';
}

buttonTwo.addEventListener('click', transitionStepTwo);

const buttonThree = document.querySelector('.next-button-three');

function transitionStepThree() {
	const stepTitleThree = document.querySelector('.step-three');
	stepTitleThree.style.display = 'none';
	const stepFour = document.querySelector('.step-four');
	stepFour.style.display = 'block';
}

buttonThree.addEventListener('click', transitionStepThree);

function chooseBase() {
	const selected = document.querySelector('input[name="basetype"]:checked');
	const cookiebase = document.getElementById('cookiebase');

	if (selected === null) {
		return;
	}

	cookiebase.style.display = 'block';

	if (selected.classList.contains('chocolate')) {
		cookiebase.querySelector('.cls-1').setAttribute('fill', '#49301D');
	} else if (selected.classList.contains('snickerdoodle')) {
		cookiebase.querySelector('.cls-1').setAttribute('fill', '#F6B659');
	} else if (selected.classList.contains('oatmeal')) {
		cookiebase.querySelector('.cls-1').setAttribute('fill', '#824E29');
	} else if (selected.classList.contains('pb')) {
		cookiebase.querySelector('.cls-1').setAttribute('fill', '#D87D3E');
	} else {
		cookiebase.querySelector('.cls-1').setAttribute('fill', '#F6B284');
	}
}

const options = Array.from(document.querySelectorAll('.options'));

options[0].addEventListener('change', chooseBase);

function changeShape() {
	const selectedshape = document.querySelector('input[name="shapetype"]:checked');

	if (selectedshape === null) {
		return;
	}

	userShape = selectedshape.value;

	if (selectedshape.classList.contains('circle')) {
		document.getElementById('treebase').style.display = 'none';
		document.getElementById('starbase').style.display = 'none';
		document.getElementById('heartbase').style.display = 'none';
		document.getElementById('gingerbreadbase').style.display = 'none';
		document.getElementById('cookiebase').style.display = 'block';
	} else if (selectedshape.classList.contains('star')) {
		document.getElementById('starbase').style.display = 'block';
		document.getElementById('cookiebase').style.display = 'none';
		document.getElementById('heartbase').style.display = 'none';
		document.getElementById('treebase').style.display = 'none';
		document.getElementById('gingerbreadbase').style.display = 'none';
	} else if (selectedshape.classList.contains('heart')) {
		document.getElementById('cookiebase').style.display = 'none';
		document.getElementById('starbase').style.display = 'none';
		document.getElementById('treebase').style.display = 'none';
		document.getElementById('gingerbreadbase').style.display = 'none';
		document.getElementById('heartbase').style.display = 'block';
	} else if (selectedshape.classList.contains('gingerbread')) {
		document.getElementById('cookiebase').style.display = 'none';
		document.getElementById('starbase').style.display = 'none';
		document.getElementById('heartbase').style.display = 'none';
		document.getElementById('treebase').style.display = 'none';
		document.getElementById('gingerbreadbase').style.display = 'block';
	} else if (selectedshape.classList.contains('tree')) {
		document.getElementById('cookiebase').style.display = 'none';
		document.getElementById('starbase').style.display = 'none';
		document.getElementById('heartbase').style.display = 'none';
		document.getElementById('gingerbreadbase').style.display = 'none';
		document.getElementById('treebase').style.display = 'block';
	}
}

options[1].addEventListener('change', changeShape);

function changeToppings() {
	const selectedTopping = document.querySelector('input[name="toppingtype"]:checked');
	if (selectedTopping === null) {
		return;
	}

	if (selectedTopping.classList.contains('mm')) {
		document.getElementById('rainbowtopping').style.display = 'none';
		document.getElementById('chocolatetopping').style.display = 'none';
		document.getElementById('gummytopping').style.display = 'none';
		document.getElementById('candycanetopping').style.display = 'none';
		document.getElementById('mmtopping').style.display = 'block';
	} else if (selectedTopping.classList.contains('rainbowsprinkles')) {
		document.getElementById('chocolatetopping').style.display = 'none';
		document.getElementById('gummytopping').style.display = 'none';
		document.getElementById('candycanetopping').style.display = 'none';
		document.getElementById('mmtopping').style.display = 'none';
		document.getElementById('rainbowtopping').style.display = 'block';
	} else if (selectedTopping.classList.contains('chocosprinkles')) {
		document.getElementById('rainbowtopping').style.display = 'none';
		document.getElementById('chocolatetopping').style.display = 'block';
		document.getElementById('gummytopping').style.display = 'none';
		document.getElementById('candycanetopping').style.display = 'none';
		document.getElementById('mmtopping').style.display = 'none';
	} else if (selectedTopping.classList.contains('gummybears')) {
		document.getElementById('rainbowtopping').style.display = 'none';
		document.getElementById('chocolatetopping').style.display = 'none';
		document.getElementById('gummytopping').style.display = 'block';
		document.getElementById('candycanetopping').style.display = 'none';
		document.getElementById('mmtopping').style.display = 'none';
	} else if (selectedTopping.classList.contains('candycane')) {
		document.getElementById('rainbowtopping').style.display = 'none';
		document.getElementById('chocolatetopping').style.display = 'none';
		document.getElementById('gummytopping').style.display = 'none';
		document.getElementById('candycanetopping').style.display = 'block';
		document.getElementById('mmtopping').style.display = 'none';
	} else if (selectedTopping.classList.contains('notoppings')) {
		document.getElementById('rainbowtopping').style.display = 'none';
		document.getElementById('chocolatetopping').style.display = 'none';
		document.getElementById('gummytopping').style.display = 'none';
		document.getElementById('candycanetopping').style.display = 'none';
		document.getElementById('mmtopping').style.display = 'none';
	}
}

options[3].addEventListener('change', changeToppings);

function updateFrosting() {
	const icingType = document.querySelector('input[name="icingtype"]:checked');
	const frostingSVG = document.getElementById(`${userShape}frosting`);
	frostingSVG.style.display = 'block';
	if (icingType === null) {
		return;
	}
	if (icingType.classList.contains('blue')) {
		frostingSVG.querySelector(`.${userShape}frostingcolor`).setAttribute('fill', '#5763AD');
	} else if (icingType.classList.contains('white')) {
		frostingSVG.querySelector(`.${userShape}frostingcolor`).setAttribute('fill', '#FFFFFF');
	} else if (icingType.classList.contains('red')) {
		frostingSVG.querySelector(`.${userShape}frostingcolor`).setAttribute('fill', '#E53D3C');
	} else if (icingType.classList.contains('green')) {
		frostingSVG.querySelector(`.${userShape}frostingcolor`).setAttribute('fill', '#66BD54');
	} else if (icingType.classList.contains('purple')) {
		frostingSVG.querySelector(`.${userShape}frostingcolor`).setAttribute('fill', '#C8A2C8');
	} else {
		icingType.classList.contains('noicing');
		frostingSVG.style.display = 'none';
	}
}

options[2].addEventListener('change', updateFrosting);
