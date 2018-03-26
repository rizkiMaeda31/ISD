//chara gallery
var charaIndex = 1;
var skenarioIndex = 1;
var gameplayIndex = 1;
var minigameIndex = 1;
var slideTopIndex = 0;

showDivs(charaIndex, "chara");
showDivs(skenarioIndex, "skenario");
//showDivs(gameplayIndex, "gameplay");
//showDivs(minigameIndex, "minigame");
//carousel();

function plusDivs(n, mode) {
    if (mode == "chara") {
        showDivs(charaIndex += n, mode);
    }
    else if (mode == "skenario") {
        showDivs(skenarioIndex += n, mode);
    }
    else if (mode == "gameplay") {
        showDivs(gameplayIndex += n, mode);
    }
    else if (mode == "minigame") {
        showDivs(minigameIndex += n, mode);
    }
}

function currentDiv(n, mode) {
    var temp;
    if (mode == "chara") {
        showDivs(charaIndex = n, mode);
    }
    else if (mode == "skenario") {
        temp = document.getElementById("gameplay-display");
        temp.className = temp.className.replace("w3-show", "w3-hide");
        //temp = document.getElementById("minigame-display");
        //temp.className = temp.className.replace("w3-show", "w3-hide");
        temp = document.getElementById("skenario-display");
        temp.className = temp.className.replace("w3-hide", "w3-show");
        showDivs(skenarioIndex = n, mode);
    }
    else if (mode == "gameplay") {
        temp = document.getElementById("skenario-display");
        temp.className = temp.className.replace("w3-show", "w3-hide");
        //temp = document.getElementById("minigame-display");
        //temp.className = temp.className.replace("w3-show", "w3-hide");
        temp = document.getElementById("gameplay-display");
        temp.className = temp.className.replace("w3-hide", "w3-show");
        showDivs(gameplayIndex = n, mode);
    }
    else if (mode == "minigame") {
        temp = document.getElementById("skenario-display");
        temp.className = temp.className.replace("w3-show", "w3-hide");
        temp = document.getElementById("gameplay-display");
        temp.className = temp.className.replace("w3-show", "w3-hide");
        temp = document.getElementById("minigame-display");
        temp.className = temp.className.replace("w3-hide", "w3-show");
        showDivs(minigameIndex = n, mode);
    }
}

function showDivs(n, mode) {
    var i;
    var x;
    var dots;
    if (mode == "chara") {
        x = document.getElementsByClassName("chara-slide");
        dots = document.getElementsByClassName("chara-btn");
        if (n > x.length) { charaIndex = 1 }
        if (n < 1) { charaIndex = x.length }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
        }
        x[charaIndex - 1].style.display = "block";
        dots[charaIndex - 1].className += " w3-opacity-off";
    }
    else if (mode == "skenario") {
        x = document.getElementsByClassName("skenario-slide");
        if (n > x.length) { skenarioIndex = 1 }
        if (n < 1) { skenarioIndex = x.length }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[skenarioIndex - 1].style.display = "block";
    }
    else if (mode == "gameplay") {
        x = document.getElementsByClassName("gameplay-slide");
        if (n > x.length) { gameplayIndex = 1 }
        if (n < 1) { gameplayIndex = x.length }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[gameplayIndex - 1].style.display = "block";
    }
    else if (mode == "minigame") {
        x = document.getElementsByClassName("minigame-slide");
        if (n > x.length) { minigameIndex = 1 }
        if (n < 1) { minigameIndex = x.length }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[minigameIndex - 1].style.display = "block";
    }
    
}

// Modal Image Gallery
function onClick(src,modal,img) {
    document.getElementById(img).src = src;
    document.getElementById(modal).style.display = "block";
    // var captionText = document.getElementById("caption");
    // captionText.innerHTML = element.alt;
}

function carousel(){
    var i;
    var x = document.getElementsByClassName("slideTop");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    slideTopIndex++;
    if (slideTopIndex > x.length) {slideTopIndex = 1}    
    x[slideTopIndex-1].style.display = "block";  
    setTimeout(carousel, 5000); // Change image every 2 seconds
}

// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}

$('div.mainnav a').click(function (event) {
    event.preventDefault();
    var link = this;
    $.smoothScroll({
        scrollTarget: link.hash
    });
});

$('nav.mainnav a').click(function (event) {
    event.preventDefault();
    var link = this;
    $.smoothScroll({
        scrollTarget: link.hash
    });
});