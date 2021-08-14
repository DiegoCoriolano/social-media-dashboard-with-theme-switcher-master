const toggle = document.getElementById("themeMode");
const background=document.getElementById("body");
const topBg=document.getElementById("top-bg");
var card=document.getElementsByClassName('social');
var cardStats=document.getElementsByClassName('overview');
var h1=document.getElementsByClassName("h1");
var h5=document.getElementsByClassName("h5");
var mode=document.getElementsByClassName("toggleText");
var user=document.getElementsByClassName("user");
var number=document.getElementsByClassName("number");
var h2=document.getElementsByClassName("title-overview");
var overviewNumber=document.getElementsByClassName("overview-number");

var overviewTitle=document.getElementsByClassName("overview-title");



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
    h1[0].style.color="hsl(230, 17%, 14%)";
    h5[0].style.color="hsl(228, 12%, 44%)";
    mode[0].style.color="hsl(228, 12%, 44%)";
    h2[0].style.color="hsl(228, 12%, 44%)";

    for(i=0; i<card.length; i++){
        card[i].style.backgroundColor="hsl(227, 47%, 96%)";
    }

    for(i=0; i<cardStats.length; i++){
        cardStats[i].style.backgroundColor="hsl(227, 47%, 96%)";
    }

    for(i=0; i<user.length; i++){
        user[i].style.color="hsl(228, 12%, 44%)";
    }

    for(i=0; i<number.length; i++){
        number[i].style.color="black";
    }

    for(i=0; i<overviewNumber.length; i++){
        overviewNumber[i].style.color="black";
    }

    for(i=0; i<overviewTitle.length; i++){
        overviewTitle[i].style.color="hsl(228, 12%, 44%)";
    }
}

function darkMode(){
    background.style.backgroundColor="hsl(230, 17%, 14%)";
    topBg.style.backgroundColor="hsl(232, 19%, 15%)";
    h1[0].style.color="white";
    h5[0].style.color="hsl(228, 34%, 66%)";
    mode[0].style.color="white";
    h2[0].style.color="white";

    for(i=0; i<card.length;i++){
        card[i].style.backgroundColor="hsl(228, 28%, 20%)";
    }

    for(i=0; i<cardStats.length;i++){
        cardStats[i].style.backgroundColor="hsl(228, 28%, 20%)";
    }

    for(i=0; i<user.length; i++){
        user[i].style.color="hsl(228, 34%, 66%)";
    }

    for(i=0; i<number.length; i++){
        number[i].style.color="white";
    }

    for(i=0; i<overviewNumber.length; i++){
        overviewNumber[i].style.color="white";
    }

    for(i=0; i<overviewTitle.length; i++){
        overviewTitle[i].style.color="hsl(228, 34%, 66%)";
}

}