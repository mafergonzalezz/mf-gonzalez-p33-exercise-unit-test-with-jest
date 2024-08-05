// Esta es mi función que suma dos números
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar(euro) {
    let dollars = euro * oneEuroIs.USD
    return  dollars 
}

function fromDollarToYen (dollars) {
    let euro = dollars / oneEuroIs.USD
    let yen = euro * oneEuroIs.JPY 
    return yen
}

function fromYenToPound (yen) {
     let euro = yen / oneEuroIs.JPY
     let pound = euro * oneEuroIs.GBP
     return pound
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound , oneEuroIs };
