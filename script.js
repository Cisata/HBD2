/* ==========================================================
   TO THE STARS
   Birthday Website
   JavaScript Part 1
========================================================== */


/* ==========================
   ELEMENT REFERENCES
========================== */

const loader = document.getElementById("loader");

const hero = document.getElementById("hero");

const letterSection = document.getElementById("letterSection");

const gallerySection = document.getElementById("gallerySection");

const musicSection = document.getElementById("musicSection");

const cakeSection = document.getElementById("cakeSection");

const celebrationSection = document.getElementById("celebrationSection");


const startButton = document.getElementById("startButton");

const continueButton = document.getElementById("continueButton");

const galleryContinue = document.getElementById("galleryContinue");

const musicContinue = document.getElementById("musicContinue");

const wishButton = document.getElementById("wishButton");

const restartButton = document.getElementById("restartButton");


const openLetter = document.getElementById("openLetter");

const letter = document.querySelector(".letter");

const flame = document.getElementById("flame");


const galleryImage = document.getElementById("galleryImage");

const previousButton = document.getElementById("prev");

const nextButton = document.getElementById("next");


/* ==========================
   IMAGE LIST
========================== */

const images = [

    "images/photo1.jpg",

    "images/photo2.jpg",

    "images/photo3.jpg"

];

let currentImage = 0;


/* ==========================
   HELPER FUNCTIONS
========================== */

function hideAllSections(){

    hero.classList.add("hidden");

    letterSection.classList.add("hidden");

    gallerySection.classList.add("hidden");

    musicSection.classList.add("hidden");

    cakeSection.classList.add("hidden");

    celebrationSection.classList.add("hidden");

}


function showSection(section){

    hideAllSections();

    section.classList.remove("fade-in");

    section.classList.remove("hidden");

    void section.offsetWidth;

    section.classList.add("fade-in");

}


/* ==========================
   LOADER
========================== */

window.addEventListener("load", ()=>{

    setTimeout(()=>{

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    },3000);

});


/* ==========================
   START BUTTON
========================== */

startButton.addEventListener("click", ()=>{

    showSection(letterSection);

});


/* ==========================
   LETTER
========================== */

openLetter.addEventListener("click", ()=>{

    letter.style.display = "block";

    letter.classList.add("fade-in");

});


/* ==========================
   CONTINUE TO GALLERY
========================== */

continueButton.addEventListener("click", ()=>{

    showSection(gallerySection);

});


/* ==========================
   GALLERY
========================== */

function updateGallery(){

    galleryImage.src = images[currentImage];

}


nextButton.addEventListener("click", ()=>{

    currentImage++;

    if(currentImage >= images.length){

        currentImage = 0;

    }

    updateGallery();

});


previousButton.addEventListener("click", ()=>{

    currentImage--;

    if(currentImage < 0){

        currentImage = images.length - 1;

    }

    updateGallery();

});


/* ==========================
   AUTO SLIDER
========================== */

setInterval(()=>{

    if(!gallerySection.classList.contains("hidden")){

        currentImage++;

        if(currentImage >= images.length){

            currentImage = 0;

        }

        updateGallery();

    }

},5000);


/* ==========================
   CONTINUE TO MUSIC
========================== */

galleryContinue.addEventListener("click", ()=>{

    showSection(musicSection);

});
/* ==========================================================
   TO THE STARS
   Birthday Website
   JavaScript Part 2
========================================================== */


/* ==========================
   MUSIC CONTINUE
========================== */

musicContinue.addEventListener("click", () => {

    showSection(cakeSection);

});


/* ==========================
   CAKE INTERACTION
========================== */

wishButton.addEventListener("click", () => {

    wishButton.disabled = true;

    wishButton.textContent = "Your wish has been made ✨";

    flame.style.opacity = "0";

    createConfetti();

    setTimeout(() => {

        showSection(celebrationSection);

    }, 2500);

});


/* ==========================
   CONFETTI
========================== */

const confettiContainer = document.getElementById("confettiContainer");


function createConfetti(){

    const colors = [

        "#E9C46A",

        "#D97706",

        "#F4A261",

        "#FFFFFF",

        "#FFD166"

    ];


    for(let i = 0; i < 120; i++){

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left = Math.random() * 100 + "%";

        piece.style.background = colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDuration = (3 + Math.random() * 3) + "s";

        piece.style.animationDelay = (Math.random() * 0.8) + "s";

        piece.style.transform = `rotate(${Math.random() * 360}deg)`;

        confettiContainer.appendChild(piece);

    }

}


/* ==========================
   RESTART
========================== */

restartButton.addEventListener("click", () => {

    location.reload();

});


/* ==========================
   SMALL ENVELOPE EFFECT
========================== */

openLetter.addEventListener("mouseenter", () => {

    openLetter.style.transform = "translateY(-6px)";

});

openLetter.addEventListener("mouseleave", () => {

    openLetter.style.transform = "translateY(0px)";

});


/* ==========================
   GALLERY FADE
========================== */

function animateGallery(){

    galleryImage.classList.remove("fade-in");

    void galleryImage.offsetWidth;

    galleryImage.classList.add("fade-in");

}


nextButton.addEventListener("click", animateGallery);

previousButton.addEventListener("click", animateGallery);


/* ==========================
   PAGE TITLE
========================== */

document.title = "Happy Birthday Ayinla ❤️";