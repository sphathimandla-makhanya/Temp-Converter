let celc = document.querySelector('[data-celcius]')
let fahr = document.querySelector('[data-fahrenheit]')

function convert1() {
    let results = (parseFloat(celc.value)*9/5) +32;
    fahr.value = parseFloat(results.toFixed(2))
}
function convert2() {
    let results = (parseFloat(fahr.value) -32) *9/5;
    celc.value = parseFloat(results.toFixed(2))
}

celc.addEventListener("input", convert1);
fahr.addEventListener("input", convert2);









