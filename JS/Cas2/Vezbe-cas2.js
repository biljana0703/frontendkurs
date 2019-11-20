//var ime = prompt("Unesite vase ime", "Bilja");// da ne bi stalno unosili u promtu
//console.log(ime);
//alert("Dobro došli " + ime);
function pozdravi(a){
    console.log("Dobrodosli " + a);
}
//pozdravi(ime);
//var broj = prompt("Unesite broj", 10)
//kvadratBroja(broj);
function kvadratBroja(prviBroj){
    var rezultat = prviBroj * prviBroj;
   console.log("Kvadrat izabranog broja " + broj+" je "+rezultat)
    console.log(rezultat);
}
function saberiBrojeve(prvi, drugi, treci){
    var zbir = prvi + drugi + treci;
    return zbir;
}

var ukupno = saberiBrojeve(18, 10, 5);
console.log(ukupno);
