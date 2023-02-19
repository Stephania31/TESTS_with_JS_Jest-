// app.js file content
console.log("Hello World")


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
    // solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)

const fromEuroToDollar = (euro) => {
    let resultado = euro * oneEuroIs.USD
    return resultado
}

const fromDollarToYen = (dollar) => {
    let resultado = dollar / oneEuroIs.USD * oneEuroIs.JPY
    return resultado
}


const fromYenToPound = (yen) => {
    let resultado = yen / oneEuroIs.JPY * oneEuroIs.GBP
    return resultado
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound  };

