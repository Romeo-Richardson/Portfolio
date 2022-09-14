function aboutMeAnimation(){
    let aboutMe = document.getElementById('about-me-bottom');
    aboutMe.style.transform = 'translateY(-450px)';

};

function skillsetAnimation(){
    let skillset = document.getElementById('skillset');
    skillset.style.transform = 'translateY(-450px)';
    dropDownAnimations();
    setTimeout(dropDownChildAnimations, 2000);
};

function galleryAnimation(){
    let gallery = document.getElementById('gallery-cover');
    gallery.style.transform = 'translateX(100%)';
    gridAnimationsMain();
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


