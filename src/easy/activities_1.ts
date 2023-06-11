// Ejercicio 1: Calcular el área de un triángulo dado su base y altura
export function calcularAreaTriangulo(base: number, altura: number): number {
    // Implementa el algoritmo para calcular el área del triángulo
    return base * altura / 2
}

// Ejercicio 2: Verificar si un número es par o impar
export function esPar(numero: number): boolean {
    // Implementa el algoritmo para determinar si el número es par o impar
    return (numero % 2) === 0
}

// Ejercicio 3: Calcular el factorial de un número
export function calcularFactorial(numero: number): number {
    // Implementa el algoritmo para calcular el factorial del número
    let factorial = 1

    for (let i = 1; i <= numero; i++) {
        factorial = factorial * i;
    }

    return factorial;
}

// Ejercicio 4: Determinar si una cadena de texto es un palíndromo
export function esPalindromo(cadena: string): boolean {
    // Implementa el algoritmo para verificar si la cadena es un palíndromo
    return false;
}

// Ejercicio 5: Ordenar un arreglo de números de forma ascendente
export function ordenarArregloAscendente(arreglo: number[]): number[] {
    // Implementa el algoritmo para ordenar el arreglo de números de forma ascendente
    return [];
}
