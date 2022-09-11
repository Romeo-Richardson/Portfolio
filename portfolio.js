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
}

function dropDownAnimations(){
    for(let [key, value] of Object.entries(dropDownElements)){
        value.style.transform = 'translateY(450px)';
    }
};

function dropDownChildAnimations(){
    for(let [key,value] of Object.entries(dropDownChildren)){
        value.style.transform = 'translateY(-120px)'
    }
}