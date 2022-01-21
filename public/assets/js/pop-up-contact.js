// 'use strict';
// Les noms de pays qui déclenchent la popup :
var france = document.getElementById('france');
var senegal = document.getElementById('senegal');
var ghana = document.getElementById('ghana');
var rdc = document.getElementById('rdc');
var afds = document.getElementById('afds');

// Les Pins des pays qui déclenchent la popup:
var pinFrance = document.getElementById('PIN-FRANCE');
var pinSenegal = document.getElementById('PIN-SENEGAL');
var pinGhana = document.getElementById('PIN-GHANA');
var pinRDC = document.getElementById('PIN-RDC');
var pinAFDS = document.getElementById('PIN-AFDS');


//Les fiches contact par pays, dans la pop-up :
var fiche_france = document.getElementById('fiche-France');
var fiche_senegal = document.getElementById('fiche-Senegal');
var fiche_ghana = document.getElementById('fiche-Ghana');
var fiche_rdc = document.getElementById('fiche-RDC');
var fiche_afds = document.getElementById('fiche-AFDS');

//La Pop-up entière
var popup = document.getElementById("pop-up-contact");
//Le container de la fiche contact
var containerFiche = document.getElementById('container-fiche');

//Bouton "Fermer" la pop-up
var closeBtn = document.getElementById('close-btn');

//Les Fonctions
closeBtn.addEventListener("click",function(){
    popup.style.display="none";
    fiche_france.style.display="none";
    fiche_senegal.style.display="none";
    fiche_ghana.style.display="none";
    fiche_rdc.style.display="none";
    fiche_afds.style.display="none";
})

france.addEventListener("click",function(){
    popup.style.display="block";
    fiche_france.style.display="block";
    //Fermer les autres 
    fiche_senegal.style.display="none";
    fiche_ghana.style.display="none";
    fiche_rdc.style.display="none";
    fiche_afds.style.display="none";
});
senegal.addEventListener("click",function(){
    popup.style.display="block";
    fiche_senegal.style.display="block";
    //Fermer les autres
    fiche_france.style.display="none";
    fiche_ghana.style.display="none";
    fiche_rdc.style.display="none";
    fiche_afds.style.display="none";
});
ghana.addEventListener("click",function(){
    popup.style.display="block";
    fiche_ghana.style.display="block";
    //Fermer les autres
    fiche_france.style.display="none";
    fiche_senegal.style.display="none";
    fiche_rdc.style.display="none";
    fiche_afds.style.display="none";
    
});
rdc.addEventListener("click",function(){
    popup.style.display="block";
    fiche_rdc.style.display="block";
    //Fermer les autres
    fiche_france.style.display="none";
    fiche_senegal.style.display="none";
    fiche_ghana.style.display="none";
    fiche_afds.style.display="none";
});
afds.addEventListener("click",function(){
    popup.style.display="block";
    fiche_afds.style.display="block";
    //Fermer les autres
    fiche_france.style.display="none";
    fiche_senegal.style.display="none";
    fiche_ghana.style.display="none";
    fiche_rdc.style.display="none";
});

popup.addEventListener("click",function(){
    popup.style.display="none";
    fiche_france.style.display="none";
    fiche_senegal.style.display="none";
    fiche_ghana.style.display="none";
    fiche_rdc.style.display="none";
    fiche_afds.style.display="none"; 
})
// alert("coucou ça marche");

//ACTIONS DES PINS
pinAFDS.addEventListener("mouseover", function(){
    popup.style.display="block";
    fiche_afds.style.display="block";
    //Fermer les autres
    fiche_france.style.display="none";
    fiche_senegal.style.display="none";
    fiche_ghana.style.display="none";
    fiche_rdc.style.display="none";
})

pinFrance.addEventListener("mouseover", function(){
    popup.style.display="block";
    fiche_france.style.display="block";
    //Fermer les autres
    fiche_afds.style.display="none";
    fiche_senegal.style.display="none";
    fiche_ghana.style.display="none";
    fiche_rdc.style.display="none";
})

pinSenegal.addEventListener("mouseover", function(){
    popup.style.display="block";
    fiche_senegal.style.display="block";
    //Fermer les autres
    fiche_france.style.display="none";
    fiche_afds.style.display="none";
    fiche_ghana.style.display="none";
    fiche_rdc.style.display="none";
})
pinGhana.addEventListener("mouseover", function(){
    popup.style.display="block";
    fiche_ghana.style.display="block";
    //Fermer les autres
    fiche_france.style.display="none";
    fiche_senegal.style.display="none";
    fiche_afds.style.display="none";
    fiche_rdc.style.display="none";
})
pinRDC.addEventListener("mouseover", function(){
    popup.style.display="block";
    fiche_rdc.style.display="block";
    //Fermer les autres
    fiche_france.style.display="none";
    fiche_senegal.style.display="none";
    fiche_ghana.style.display="none";
    fiche_afds.style.display="none";
})

// FERMETURE DE LA POP-UP QUAND LA SOURIS QUITTE LA FICHE CONTACT
containerFiche.addEventListener("mouseleave", function(){
    popup.style.display="none";
    fiche_france.style.display="none";
    fiche_senegal.style.display="none";
    fiche_ghana.style.display="none";
    fiche_rdc.style.display="none";
    fiche_afds.style.display="none";
})