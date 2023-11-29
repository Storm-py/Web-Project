Shery.imageEffect(".back", {
    style: 5, config: {
        a: { value: 1.49, range: [0, 30] },
        b: { value: -0.98, range: [-1, 1] },
        aspect: { value: 1.8822947576 },
        gooey: { value: true },
        infiniteGooey: { value: true },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: true },
        maskVal: { value: 1.33, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: false },
        OnMouse: { value: 1 },
        noise_speed: { value: 1.59, range: [0, 10] },
        metaball: { value: 0.21, range: [0, 2] },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0, range: [0, 0.1] },
        noise_height: { value: 0.47, range: [0, 2] },
        noise_scale: { value: 12.15, range: [0, 100] },
    }, gooey: true
})
var cardim = document.querySelectorAll(".card__image");
cardim.forEach(function (elem) {
	var imgs = elem.querySelectorAll(".card__image img");
    var index = 0;
    var animating=false;
    document.querySelector(".main").addEventListener("click", function () {
        if(!animating){
			animating=true;
            gsap.to(imgs[index], {
                top: "-=100%",
                duration: 1,
                ease: Expo.easeInOut,
                onComplete: function () {
					gsap.set(this._targets[0], { top: "100%" })
                    animating=false;
                }
            })
            index === imgs.length - 1 ? (index = 0) : index++
            gsap.to(imgs[index], {
				top: "-=100%",
                duration: 1,
                ease: Expo.easeInOut,
            })
        }
    })
})




var elems = document.querySelectorAll(".elem");
elems.forEach(function (elem) {
    var h1s = elem.querySelectorAll("h1");
    var index = 0;
    var animating=false;
    document.querySelector(".main").addEventListener("click", function () {
        if(!animating){
            animating=true;
            gsap.to(h1s[index], {
                top: "-=100%",
                duration: 1,
                ease: Expo.easeInOut,
                onComplete: function () {
                    gsap.set(this._targets[0], { top: "100%" })
                    animating=false;
                }
            })
            index === h1s.length - 1 ? (index = 0) : index++;
			console.log(index)
            gsap.to(h1s[index], {
                top: "-=100%",
                duration: 1,
                ease: Expo.easeInOut,
            })
        }
    })
})


document.addEventListener("DOMContentLoaded", function() {
    var texts = [
        "Gojo",
        "Tanjiro",
        "Gintama",
		"Goku",
		"Eren Yeager"
    ];
	var mexts = [
		"Strongest Sorceror",
		"Demons Nightmare",
		"Who is he",
		"Saiyan Warrior",
		"Titan Shifter"
	];
	var jexts = [
		"Wanna Fight Gojo?",
		"Tanjiro, determined and compassionate, battles demons to avenge his family",
		"i think i might need some help cuz i dont know anything about this guy",
		"I grew up watching this guy and i dreamnt of becoming a saiyan lol",
		"Eren Yeager, driven by vengeance, transforms into a formidable titan"
	];
	var aexts = [
		"BadAss Sukuna",
		"Muzan",
		"i dont know",
		"Vegeta",
		"Mikasa"
	];
	var bexts = [
		"King Of Curses",
		"Malevolent Mastermind",
		"i think i might need some help cuz i dont know anything about this guy",
		"Saiyan Prince",
		"Relentless Protector"
	];
	var cexts = [
		"This Guy Really Tells You The Real Meaning Of BadAss",
		"Muzan, sinister and immortal, orchestrates schemes to dominate the demon world.",
		"i think i might need some help cuz i dont know anything about this guy",
		"Vegeta, proud Saiyan prince, evolves through battles, seeking unmatched strength.",
		"Mikasa, fiercely protective, excels in combat, devoted to Eren's safety."
	];
	var dexts = [
		"Itadori",
		"Neuzoko",
		"Gintama",
		"Beerus",
		"Levi"
	];
	var eexts = [
		"Sukuna's Vessel",
		"Demon Survivor",
		"Gintama",
		"Destructive Deity",
		"BadAss Squad Leader"
	];
	var fexts = [
		"He May Look Weak But Beaware of his power",
		"Nezuko, resilient and gentle, battles demons with a hidden strength.",
		"i think i might need some help cuz i dont know anything about this guy",
		"Beerus, the God of Destruction, maintains cosmic balance with formidable power.",
		"Levi, a skilled and stoic soldier, executes precision strikes with mastery."
	];

    var toggleTextElement = document.getElementById("toggleText");
	var moggleTextElement = document.getElementById("moggleText");
	var joggleTextElement = document.getElementById("joggleText");
	var aoggleTextElement = document.getElementById("aoggleText");
	var boggleTextElement = document.getElementById("boggleText");
	var coggleTextElement = document.getElementById("coggleText");
	var doggleTextElement = document.getElementById("doggleText");
	var eoggleTextElement = document.getElementById("eoggleText");
	var foggleTextElement = document.getElementById("foggleText");
    var incrementButton = document.querySelector(".main");

    var textIndex = 0;

    function toggleText() {
        toggleTextElement.style.display = "none";
        textIndex = (textIndex + 1) % texts.length;
        toggleTextElement.innerHTML = texts[textIndex];
        toggleTextElement.style.display = "block";
    }
    function moggleText() {
        moggleTextElement.style.display = "none";
        textIndex = (textIndex + 1) % texts.length;
        moggleTextElement.innerHTML = mexts[textIndex];
        moggleTextElement.style.display = "block";
    }
    function joggleText() {
        joggleTextElement.style.display = "none";
        textIndex = (textIndex + 1) % texts.length;
        joggleTextElement.innerHTML = jexts[textIndex];
        joggleTextElement.style.display = "block";
    }
    function aoggleText() {
        aoggleTextElement.style.display = "none";
        textIndex = (textIndex + 1) % texts.length;
        aoggleTextElement.innerHTML = aexts[textIndex];
        aoggleTextElement.style.display = "block";
    }
    function boggleText() {
        boggleTextElement.style.display = "none";
        textIndex = (textIndex + 1) % texts.length;
        boggleTextElement.innerHTML = bexts[textIndex];
        boggleTextElement.style.display = "block";
    }
    function coggleText() {
        coggleTextElement.style.display = "none";
        textIndex = (textIndex + 1) % texts.length;
        coggleTextElement.innerHTML = cexts[textIndex];
        coggleTextElement.style.display = "block";
    }
    function doggleText() {
        doggleTextElement.style.display = "none";
        textIndex = (textIndex + 1) % texts.length;
        doggleTextElement.innerHTML = dexts[textIndex];
        doggleTextElement.style.display = "block";
    }
    function eoggleText() {
        eoggleTextElement.style.display = "none";
        textIndex = (textIndex + 1) % texts.length;
        eoggleTextElement.innerHTML = eexts[textIndex];
        eoggleTextElement.style.display = "block";
    }
    function foggleText() {
        foggleTextElement.style.display = "none";
        textIndex = (textIndex + 1) % texts.length;
        foggleTextElement.innerHTML = fexts[textIndex];
        foggleTextElement.style.display = "block";
    }

    function incrementText() {
        textIndex = (textIndex + 1) % texts.length;

        toggleTextElement.innerHTML = texts[textIndex];
        moggleTextElement.innerHTML = mexts[textIndex];
        joggleTextElement.innerHTML = jexts[textIndex];
        aoggleTextElement.innerHTML = aexts[textIndex];
        boggleTextElement.innerHTML = bexts[textIndex];
        coggleTextElement.innerHTML = cexts[textIndex];
        doggleTextElement.innerHTML = dexts[textIndex];
        eoggleTextElement.innerHTML = eexts[textIndex];
        foggleTextElement.innerHTML = fexts[textIndex]; 
    }
    toggleTextElement.addEventListener("click", toggleText);
    moggleTextElement.addEventListener("click", joggleText);
    joggleTextElement.addEventListener("click", moggleText);
    aoggleTextElement.addEventListener("click", aoggleText);
    boggleTextElement.addEventListener("click", boggleText);
    coggleTextElement.addEventListener("click", coggleText);
    doggleTextElement.addEventListener("click", doggleText);
    eoggleTextElement.addEventListener("click", eoggleText);
    foggleTextElement.addEventListener("click", foggleText);
    incrementButton.addEventListener("click", incrementText);
});




// gsap.to(".vid", {
//     zIndex: 0,
//     delay: 6.4,
//     opacity: 0,
// })
// gsap.to("header", {
//     opacity: 100,
//     delay: 6.7
// })
// gsap.to(".popular", {
//     opacity: 100,
//     delay: 6.7
// })

var crsr=document.querySelector(".cursor")
var blur=document.querySelector(".blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x + "px";
    crsr.style.top=dets.y + "px";
    blur.style.left=dets.x -200 + "px";
    blur.style.top=dets.y -200 + "px";
})



// carousel starts here


const {gsap, imagesLoaded } = window;

const buttons = {
	prev: document.querySelector(".btn--left"),
	next: document.querySelector(".btn--right"),
};
const cardsContainerEl = document.querySelector('.cards__wrapper');
const appBgContainerEl = document.querySelector('.app__bg');

const cardInfosContainerEl = document.querySelector('.info__wrapper');

buttons.next.addEventListener('click', () => swapCards('right'));

buttons.prev.addEventListener('click', () => swapCards('left'));

function swapCards(direction) {
	const currentCardEl = cardsContainerEl.querySelector(".current--card");
	const previousCardEl = cardsContainerEl.querySelector('.previous--card');
	const nextCardEl = cardsContainerEl.querySelector('.next--card');
	
	const currentBgImageEl = appBgContainerEl.querySelector('.current--image');
	const previousBgImageEl = appBgContainerEl.querySelector('.previous--image');
	const nextBgImageEl = appBgContainerEl.querySelector('.next--image');
	
	changeInfo(direction);
	swapCardsClass();
	
	removeCardEvents(currentCardEl);
	
	function swapCardsClass() {
		currentCardEl.classList.remove('current--card');
		previousCardEl.classList.remove('previous--card');
		nextCardEl.classList.remove('next--card');
		
		currentBgImageEl.classList.remove('current--image');
		previousBgImageEl.classList.remove('previous--image');
		nextBgImageEl.classList.remove('next--image');
		
		currentCardEl.style.zIndex = "50";
		currentBgImageEl.style.zIndex = '-2';
		
		if (direction === 'right') {
			previousCardEl.style.zIndex = "20";
			nextCardEl.style.zIndex = "30";
			
			nextBgImageEl.style.zIndex = '-1';
			
			currentCardEl.classList.add('previous--card');
			previousCardEl.classList.add('next--card');
			nextCardEl.classList.add('current--card');
			
			currentBgImageEl.classList.add('previous--image');
			previousBgImageEl.classList.add('next--image');
			nextBgImageEl.classList.add('current--image');
		} else if (direction === 'left') {
			previousCardEl.style.zIndex = "30";
			nextCardEl.style.zIndex = "20";
			
			previousBgImageEl.style.zIndex = '-1';
			
			currentCardEl.classList.add('next--card');
			previousCardEl.classList.add('current--card');
			nextCardEl.classList.add('previous--card');
			
			currentBgImageEl.classList.add('next--image');
			previousBgImageEl.classList.add('current--image');
			nextBgImageEl.classList.add('previous--image');
		}
	}
}

function changeInfo(direction) {
	let currentInfoEl = cardInfosContainerEl.querySelector('.current--info');
	let previousInfoEl = cardInfosContainerEl.querySelector('.previous--info');
	let nextInfoEl = cardInfosContainerEl.querySelector('.next--info');
	
	gsap.timeline()
		.to([buttons.prev, buttons.next], {
		duration: 0.2,
		opacity: 0.5,
		pointerEvents: 'none',
	})
		.to(
		currentInfoEl.querySelectorAll('.text'),
		{
			duration: 0.4,
			stagger: 0.1,
			translateY: '-120px',
			opacity: 0,
		},
		"-="
	)
		.call(() => {
		swapInfosClass(direction);
	})
		.call(() => initCardEvents())
		.fromTo(
		direction === "right"
		? nextInfoEl.querySelectorAll('.text')
		: previousInfoEl.querySelectorAll('.text'),
		{
			opacity: 0,
			translateY: "40px",
		},
		{
			duration: 0.4,
			stagger: 0.1,
			translateY: "0px",
			opacity: 1,
		}
	)
		.to([buttons.prev, buttons.next], {
		duration: 0.2,
		opacity: 1,
		pointerEvents: 'all',
	})
	
	function swapInfosClass() {
		currentInfoEl.classList.remove('current--info');
		previousInfoEl.classList.remove('previous--info');
		nextInfoEl.classList.remove('next--info');
		
		if (direction === 'right') {
			currentInfoEl.classList.add('previous--info');
			nextInfoEl.classList.add('current--info');
			previousInfoEl.classList.add('next--info');
		} else if (direction === 'left') {
			currentInfoEl.classList.add('next--info');
			nextInfoEl.classList.add('previous--info');
			previousInfoEl.classList.add('current--info');
		}
	}
}

function updateCard(e) {
	const card = e.currentTarget;
	const box = card.getBoundingClientRect();
	const centerPosition = {
		x: box.left + box.width / 2,
		y: box.top + box.height / 2,
	};
	let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (30 / Math.PI);
	gsap.set(card, {
		"--current-card-rotation-offset": `${angle}deg`,
	});
	const currentInfoEl = cardInfosContainerEl.querySelector('.current--info');
	gsap.set(currentInfoEl, {
		rotateY: `${angle}deg`,
	});
}

function resetCardTransforms(e) {
	const card = e.currentTarget;
	const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	gsap.set(card, {
		'--current-card-rotation-offset' : 0,
	});
	gsap.set(currentInfoEl, {
		rotateY: 0,
	});
}

function initCardEvents() {
	const currentCardEl = cardsContainerEl.querySelector('.current--card');
	currentCardEl.addEventListener('pointermove', updateCard);
	currentCardEl.addEventListener('pointerout', (e) => {
		resetCardTransforms(e);
	});
}

initCardEvents();

function removeCardEvents(card) {
	card.removeEventListener('pointermove', updateCard);
}

function init() {
	let tl = gsap.timeline();
	
	tl.to(cardsContainerEl.children, {
		delay: 0.15,
		duration: 0.5,
		stagger: {
			ease: 'power4.inOut',
			from: "right",
			amount: 0.1,
		},
		"--card-translateY-offset" : "0%",
	})
		.to(cardInfosContainerEl.querySelector( ".current--info").querySelectorAll('.text'), {
		delay: 0.5,
		duration: 0.4,
		stagger: 0.1,
		opacity: 1,
		translateY: 0,
	})
		.to(
		[buttons.prev, buttons.next],
		{
			duration: 0.4,
			opacity: 1,
			pointerEvents: 'all',
		},
		"-=0.4"
	);
}

const waitForImages = () => {
	const images = [...document.querySelectorAll('img')];
	const totalImages = images.length;
	let loadedImages = 0;
	const loaderEl = document.querySelector('.loader span');
	
	gsap.set(cardsContainerEl.children, {
		"--card-translateY-offset": "100vh",
	});
	gsap.set(cardInfosContainerEl.querySelector('.current--info').querySelectorAll('.text'), {
		translateY: "40px",
		opacity: 0,
	});
	gsap.set([buttons.prev, buttons.next], {
		pointerEvents: 'none',
		opacity: '0',
	});
	
	images.forEach((image) => {
		imagesLoaded(image, (instance) => {
			if (instance.isComplete) {
				loadedImages++;
				let loadProgress = loadedImages / totalImages;
				gsap.to(loaderEl, {
					duration: 1,
					scaleX: loadProgress,
					backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
				});
				if (totalImages == loadedImages) {
					gsap.timeline()
						.to(".loading__wrapper", {
						duration: 0.8,
						opacity: 0,
						pointerEvents: 'none',
					})
						.call(() => init());
				}
			}
		});
	});
};
waitForImages();