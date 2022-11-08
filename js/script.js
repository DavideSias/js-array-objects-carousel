
const arrImages = [
	{
		image: '01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: '02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: '03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: '04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: '05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];

const eleSlider = document.querySelector('.slider');
const eleSide = document.querySelector('.side-imgs');
const eleBtnUp = document.querySelector('.btn-up');
const eleBtnDown = document.querySelector('.btn-down');


for (let i = 0; i < arrImages.length; i++) {
	const eleImg = document.createElement('img');
    const eleText = document.createElement('div');
    eleText.classList.add('text');
	eleImg.src = (`img/${arrImages[i].image}`);
	eleImg.classList.add('slider-img');

    eleText.innerHTML = (`
        <h2>${arrImages[i].title}</h2>
        <p>${arrImages[i].text}</p>
    `)

	if (i === 0) {
		eleImg.classList.add('active');
		eleText.classList.add('active');
	}

	const eleSideImg = document.createElement('img');
	eleSideImg.src = (`img/${arrImages[i].image}`);
	eleSideImg.classList.add('img-side');
	
	if (i === 0) {
        eleSideImg.classList.add('focused');
	}
	
    eleSlider.append(eleImg, eleText);
	eleSide.append(eleSideImg);
}

const listEleImg = document.querySelectorAll('.slider-img'); 
const listSideImg = document.querySelectorAll('.img-side'); 
const listEleText = document.querySelectorAll('.text'); 

let activeIndex = 0;

eleBtnDown.addEventListener('click', function () {

    listEleImg[activeIndex].classList.remove('active');
    listEleText[activeIndex].classList.remove('active');
    listSideImg[activeIndex].classList.remove('focused');

    if(activeIndex === listEleImg.length - 1){
        activeIndex = -1;
    }
    
    activeIndex++;  
    listEleImg[activeIndex].classList.add('active');
    listEleText[activeIndex].classList.add('active');
    listSideImg[activeIndex].classList.add('focused');
    
});

eleBtnUp.addEventListener('click', function () {

	listEleImg[activeIndex].classList.remove('active');
    listEleText[activeIndex].classList.remove('active');
    listSideImg[activeIndex].classList.remove('focused');


    if(activeIndex === 0){
        activeIndex = listEleImg.length;
    }

	activeIndex--;
	listEleImg[activeIndex].classList.add('active');
    listEleText[activeIndex].classList.add('active');
    listSideImg[activeIndex].classList.add('focused');

});