const { sum } = require('./app.js');

const {fromYenToPound, oneEuroIs } = require('./app.js');


test('convertir 1000 yenes a pounds', () => {
    const pounds = fromYenToPound(1000);
    expect(pounds).toBeCloseTo(5.56); // Ajusta el valor esperado según la tasa de conversión
});