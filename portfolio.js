function headerStyles(){
    let projects = document.getElementById('gallery-cover-text');
    projects.innerText = `<PROJECTS/>`;
    let aboutMe = document.getElementById('about-me-bottom-text');
    aboutMe.innerText = `<ABOUT-ME/>`;
    let skillsetHeader = document.getElementById('skillset-text');
    skillsetHeader.innerText = `<SKILL-SET/>`;
};

headerStyles();

function aboutMeAnimation(){
    let aboutMe = document.getElementById('about-me-bottom');
    aboutMe.style.transform = 'translateY(-450px)';

};

function skillsetAnimation(){
    let skillset = document.getElementById('skillset');
    skillset.style.transform = 'translateY(-450px)';
    dropDownAnimations();
    setTimeout(dropDownChildAnimations, 2000);
    setTimeout(dropdownText, 2500);
};

function galleryAnimation(){
    let gallery = document.getElementById('gallery-cover');
    gallery.style.transform = 'translateX(100%)';
    setTimeout(layer, 1000);
    gridAnimationsMain();
};

function layer(){
    let galleryLayer = document.getElementById('gallery-layer');
    galleryLayer.style.transform = 'scale(0)';
};

let dropDownElements = {
    htmlDropDown: document.getElementById('html-skill'),
    cssDropDown: document.getElementById('css'),
    jsDropDown: document.getElementById('js'),
    reactDropDown: document.getElementById('react')
};

let dropDownChildren = {
    htmlChild: document.getElementById('html-logo'),
    cssChild: document.getElementById('css-logo'),
    jsChild: document.getElementById('js-logo'),
    reactChild: document.getElementById('react-logo')
};

let galleryGrid = {
    g1: document.getElementById('g1'),
    g2: document.getElementById('g2'),
    g3: document.getElementById('g3'),
    g4: document.getElementById('g4'),
    g5: document.getElementById('g5'),
    g6: document.getElementById('g6')
};

function gridAnimations1(){
    galleryGrid.g1.style.transform = 'scale(1)'
    galleryGrid.g2.style.transform = 'scale(1)'
};

function gridAnimations2(){
    galleryGrid.g3.style.transform = 'scale(1)'
    galleryGrid.g4.style.transform = 'scale(1)'
};

function gridAnimations3(){
    galleryGrid.g5.style.transform = 'scale(1)'
    galleryGrid.g6.style.transform = 'scale(1)'
};

function gridAnimationsMain(){
    setTimeout(gridAnimations1, 500);
    setTimeout(gridAnimations2, 750);
    setTimeout(gridAnimations3, 1000);
};

function dropDownAnimations(){
    for(let [key, value] of Object.entries(dropDownElements)){
        value.style.transform = 'translateY(450px)';
    }
};

function dropDownChildAnimations(){
    for(let [key,value] of Object.entries(dropDownChildren)){
        value.style.transform = 'translateY(-120px)'
    }
};

function dropdownText(){
    let text = document.querySelectorAll('.dropdown-text');
    text.forEach((element)=>{
        element.style.transform = 'scale(1)';
    })
    
};

function welcomeAnimation(){
    let welcome = document.querySelectorAll('.welcome');
    let counter = 1;
    welcome.forEach((letter)=>{
        letter.style.transition = `${counter}s`;
        letter.style.transform = 'translateY(30px)';
        counter += .05;
    });
};

function g1Link(){
    location.href = '/public/Tip-Calculator/calc.html'
};

function g2Link(){
    location.href = '/public/Sign Up/signup.html'
};

function g3Link(){
    location.href = '/public/Expense-Tracker/expense.html'
};

function g4Link(){
    location.href = '/public/Product Preview Card/product-preview-card.html'
};

function g5Link(){
    location.href = '/public/Survey-Example/Survey.html'
};

function openResume(){
    location.href = 'https://docs.google.com/document/d/1LId_bj_4E3uJ3Rz2Z_6a_pWjXhU_lgsI/edit?usp=sharing&ouid=111835233067693231251&rtpof=true&sd=true'
};

welcomeAnimation();
