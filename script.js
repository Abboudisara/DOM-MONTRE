// Séléctionner les aiguilles de montre

const AIGUILLESEC = document.querySelector("#second");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLEHR = document.querySelector("#hour");

function run_the_clock(){
var date = new Date(); 
let sec = date.getSeconds(); 
let min = date.getMinutes(); 
let hr = date.getHours(); 

// console.log ("Houre: "+ hr + "Minute: "+ min + "Seconde: "+ sec);
let secPosition = sec * 360/60;
let minPosition = (min * 360/60) + (sec * 360/60) / 60; 
let hrPosition = hr*360/12 + ((min * 360/60) / 12); 

 
AIGUILLESEC.style.transform = "rotate(" + secPosition + "deg)";
AIGUILLEMIN.style.transform = "rotate(" + minPosition + "deg)"; 
AIGUILLEHR.style.transform = "rotate(" + hrPosition + "deg)"; 

}
// Exercuter la fonction chaque second
var interval = setInterval(run_the_clock, 1000);