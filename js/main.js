const toggle = document.getElementById("themeMode");
const background=document.getElementById("body");
const topBg=document.getElementById("top-bg");
const card=document.getElementsByClassName('social');

function theme(){
    if (toggle.checked==true){
        lightMode();
    }else{
        darkMode();
}

}

function lightMode(){
    background.style.backgroundColor="white";
    topBg.style.backgroundColor="hsl(225, 100%, 98%)";
card.style.backgroundColor="blue";!""
}

function darkMode(){
    background.style.backgroundColor="hsl(230, 17%, 14%)";
    topBg.style.backgroundColor="hsl(232, 19%, 15%)";
}

