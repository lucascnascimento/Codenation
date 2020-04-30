const calculadora = require("./calc");

describe("calculadora", () => {
  it("teste exemplo", () => {
    const numero1 = 23;
    const numero2 = 34;
    expect(23 + 7).toBe(30);
    expect(23 + 7).not.toBe(31);
  });

  describe("soma", () => {
    it("return 3 quando 2 é somado com 1", () => {
      const num1 = 2;
      const num2 = 1;
      expect(calculadora.soma(num1, num2)).toBe(3);
    });
  });

  describe("subtração", () => {
    it("return 1 quando 1 é subtraído com 2", () => {
      const num1 = 2;
      const num2 = 1;
      expect(calculadora.subtracao(num1, num2)).toBe(1);
    });
  });

  describe("multiplicação", () => {
    it("return 2 quando 1 é multiplicado com 2", () => {
      const num1 = 2;
      const num2 = 1;
      expect(calculadora.multiplicacao(num1, num2)).toBe(2);
    });
  });

  describe("divisão", () => {
    it("return 2 quando 6 é divido por 3", () => {
      const num1 = 6;
      const num2 = 3;
      expect(calculadora.divisao(num1, num2)).toBe(2);
    });
  });

  describe("divisão", () => {
    it("return 'indeterminação matemática' quando 6 é divido por 0", () => {
      const num1 = 6;
      const num2 = 0;
      expect(calculadora.divisao(num1, num2)).toBe("Indeterminação matemática");
    });
  });
});
