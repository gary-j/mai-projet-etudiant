// alert('flag-lang');
function altFlag(){


var flag = document.getElementById('lang-flag').getAttribute("src"); 

switch(flag) {
    case "assets/img/svg/Flag_of_France.svg" :
        document.getElementById('lang-flag').src = "assets/img/svg/Flag_of_the_United_Kingdom.svg";
    break;
    case "assets/img/svg/Flag_of_the_United_Kingdom.svg" :
        document.getElementById('lang-flag').src = "assets/img/svg/Flag_of_France.svg";
    break;}

}