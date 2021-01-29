const navbar    = document.querySelector("nav");
const blackLogo = document.querySelector("#blackLogo");
const whiteLogo = document.querySelector("#whiteLogo");
const movies    = document.querySelector("#movies");
const news      = document.querySelector("#news");
const about     = document.querySelector("#about");
const header    = document.querySelector("h1");
var   genre     = "all";
var i, a, arr1, arr2;
var scrollInterval;
const x = document.getElementsByClassName("filterDiv");


window.onscroll = function(){
    var top = window.scrollY;
    if(top >= 1){
        navbar.classList.add("activeBackground");

        blackLogo.classList.add("inactiveLogo");
        blackLogo.classList.remove("activeLogo");

        whiteLogo.classList.add("activeLogo");
        whiteLogo.classList.remove("inactiveLogo");

        movies.classList.add("activeText");
        news.classList.add("activeText");
        about.classList.add("activeText");

        header.classList.add("activeHeader");

        clearInterval(scrollInterval);
    }else{
        navbar.classList.remove("activeBackground");

        blackLogo.classList.remove("inactiveLogo");
        blackLogo.classList.add("activeLogo");

        whiteLogo.classList.remove("activeLogo");
        whiteLogo.classList.add("inactiveLogo");

        movies.classList.remove("activeText");
        news.classList.remove("activeText");
        about.classList.remove("activeText");

        header.classList.remove("activeHeader");

        scrollInterval = setInterval(auroScrollDown,3000);
    }
}

document.querySelectorAll(".tag")[0].addEventListener("click", genreIsAll);
document.querySelectorAll(".tag")[1].addEventListener("click", genreIsNew);
document.querySelectorAll(".tag")[2].addEventListener("click", genreIsAction);
document.querySelectorAll(".tag")[3].addEventListener("click", genreIsComedy);
document.querySelectorAll(".tag")[4].addEventListener("click", genreIsSciFi);
document.querySelectorAll(".tag")[5].addEventListener("click", genreIsMystery);
document.querySelectorAll(".tag")[6].addEventListener("click", genreIsAdventure);

function genreIsAll()       {genre = "all";         showByGenre();}
function genreIsNew()       {genre = "new";         showByGenre();}
function genreIsAction()    {genre = "action";      showByGenre();}
function genreIsComedy()    {genre = "comedy";      showByGenre();}
function genreIsSciFi()     {genre = "scifi";       showByGenre();}
function genreIsMystery()   {genre = "mystery";     showByGenre();}
function genreIsAdventure() {genre = "adventure";   showByGenre();}
function auroScrollDown()   {window.scrollBy(0, 180);}

function showByGenre(){

    for(i=0; i<x.length; i++){
        arr1 = x[i].getAttribute('class');      //Here!!!
        arr2 = arr1.split(" ");
        CHECK:
        for(a=0; a<arr2.length; a++){
            if (arr2[a] !== genre) {
                x[i].classList.add("inactiveMovie");
            }else{
                x[i].classList.remove("inactiveMovie");
                break CHECK;
            }
        }
    }
}































