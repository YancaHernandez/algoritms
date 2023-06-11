import {
    sumarArregloNumeros,
    esPrimo,
    encontrarNumeroMayor,
    revertirCadena,
    calcularPromedio,
} from './activities_2';

describe('Ejercicios de algoritmo (Parte 2)', () => {
    describe('sumarArregloNumeros', () => {
        it('Suma todos los elementos de un arreglo de números', () => {
            expect(sumarArregloNumeros([1, 2, 3, 4, 5])).toBe(0); // Valor de retorno predeterminado sin resolver
            // Agrega más casos de prueba aquí
        });
    });

    describe('esPrimo', () => {
        it('Verifica si un número es primo', () => {
            expect(esPrimo(7)).toBe(false); // Valor de retorno predeterminado sin resolver
            // Agrega más casos de prueba aquí
        });
    });

    describe('encontrarNumeroMayor', () => {
        it('Encuentra el número mayor en un arreglo de números', () => {
            expect(encontrarNumeroMayor([1, 8, 3, 5, 2])).toBe(0); // Valor de retorno predeterminado sin resolver
            // Agrega más casos de prueba aquí
        });
    });

    describe('revertirCadena', () => {
        it('Revierte una cadena de texto', () => {
            expect(revertirCadena('hello')).toBe(''); // Valor de retorno predeterminado sin resolver
            // Agrega más casos de prueba aquí
        });
    });

    describe('calcularPromedio', () => {
        it('Calcula el promedio de un arreglo de números', () => {
            expect(calcularPromedio([2, 4, 6, 8, 10])).toBe(0); // Valor de retorno predeterminado sin resolver
            // Agrega más casos de prueba aquí
        });
    });
});
