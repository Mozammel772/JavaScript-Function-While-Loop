function inYearName (year) {
    if ( year % 4 == 0){
        return true;
    }
    else {
        return false;
    }
}
const years = 2022;
const inYear = inYearName(years);
console.log('In the Leep year in', inYear);


const favaYear = 2060;
const inFavaratureYear = inYearName(favaYear);
console.log('In my favarouite Year ', inFavaratureYear);