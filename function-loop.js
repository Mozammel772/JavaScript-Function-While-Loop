function incheToFeet(inche){
    var feet = inche/12;
    return feet;
}
var naniInches = 270;
var feet = incheToFeet(naniInches);
console.log('My Inches is the Best', feet);

var dadaInches = 620;
var feet = incheToFeet(dadaInches);
console.log('Hello Inche', feet);



function mileToKilometer (mile){
    var km = mile * 1.60;
    console.log('Total mile', mile);
    return km;
}
var kilomer = 600;
var killo = mileToKilometer(kilomer);
console.log('Total Kilometer', killo);