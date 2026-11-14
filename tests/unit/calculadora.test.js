const calc = require("../../models/calculadora.js");

test("Somar 2+2 deveria retornar 4", () => {
  const resultado = calc.somar(2, 2);
  console.log(resultado);
  expect(resultado).toBe(4);
});

test("Somar 5 + 100 deveria retornar 105", () => {
  const resultado = calc.somar(5, 100);
  console.log(resultado);
  expect(resultado).toBe(105);
});

test("Somar 15 + Banana deve retornar Error", () => {
  const resultado = calc.somar(15, "Banana");
  expect(resultado).toBe("Error");
});
