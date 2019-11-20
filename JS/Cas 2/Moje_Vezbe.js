var mojeIme = prompt("Unesite ime", "");
var mojaGodina = prompt("Unesite godinu rodjenja", "");
var numberGodina = parseInt(mojaGodina);
//var brojGodina = 2019 - numberGodina;

function oduzmi(god){
    var brojGodina = 2019 - god;
    return(brojGodina);
    
}
var brGodina = oduzmi(numberGodina) 
alert("Vi " + mojeIme + " imate " + brGodina + " godina");