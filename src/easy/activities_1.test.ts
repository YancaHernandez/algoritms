import {
    calcularAreaTriangulo,
    esPar,
    calcularFactorial,
    esPalindromo,
    ordenarArregloAscendente,
} from './activities_1';

describe('Ejercicios de algoritmo', () => {
    describe('calcularAreaTriangulo', () => {
        it('Calcula el área de un triángulo dado su base y altura', () => {
            expect(calcularAreaTriangulo(5, 4)).toBe(10); // Ejemplo válido: área = (base * altura) / 2
            expect(calcularAreaTriangulo(3, 7)).toBe(10.5); // Ejemplo válido: área = (base * altura) / 2
        });
    });

    describe('esPar', () => {
        it('Verifica si un número es par o impar', () => {
            expect(esPar(4)).toBe(true); // Ejemplo válido: el número 4 es par
            expect(esPar(7)).toBe(false); // Ejemplo válido: el número 7 es impar
            expect(esPar(3)).toBe(false)
            expect(esPar(8)).toBe(true)
        });
    });

    describe('calcularFactorial', () => {
        it('Calcula el factorial de un número', () => {
            expect(calcularFactorial(5)).toBe(120); // Ejemplo válido: 5! = 5 * 4 * 3 * 2 * 1 = 120
            expect(calcularFactorial(0)).toBe(1); // Ejemplo válido: 0! se define como 1
        });
    });

    describe('esPalindromo', () => {
        it('Verifica si una cadena de texto es un palíndromo', () => {
            expect(esPalindromo('radar')).toBe(true); // Ejemplo válido: "radar" es un palíndromo
            expect(esPalindromo('hello')).toBe(false); // Ejemplo válido: "hello" no es un palíndromo
        });
    });

    describe('ordenarArregloAscendente', () => {
        it('Ordena un arreglo de números de forma ascendente', () => {
            expect(ordenarArregloAscendente([5, 2, 8, 1, 9])).toEqual([1, 2, 5, 8, 9]); // Ejemplo válido: arreglo ordenado de forma ascendente
            expect(ordenarArregloAscendente([10, 3, 7, 2])).toEqual([2, 3, 7, 10]); // Ejemplo válido: arreglo ordenado de forma ascendente
        });
    });
});
