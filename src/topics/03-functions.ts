
// Funciones en TypeScript...

// Si nosotros pasamos un parametro sin su tipo de dato, TypeScript lo infiere
// automaticamente como any y no nos dara un error de compilacion si pasamos
// un tipo de dato diferente al que espera la funcion. Esto es un problema
// porque no nos dara un error de compilacion y podriamos pasar un tipo de
// dato que no es el que espera la funcion y que no se pueda ejecutar.

// Nunca dejar que typescript infiera el tipo de dato de un parametro.
// Intentar no usar el tipo de dato any.

function addNumber(a: number, b: number) {
    return a + b;
}

// Funciones de flecha
// En el caso de esta función le decimos que los parametros
// que recibe son de tipo number y que el valor que retorna
// es de tipo string.
const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
};

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

/* const result: number = addNumber(10, 2);
const result2: string = addNumbersArrow(20, 30);
const result3: number = multiply(5); */
/* console.log({ result, result2, result3 }); */

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const heal = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`HP: ${this.hp}`);
    }
}

heal(strider, 20);
strider.showHp();

// Nunca dejar que typescript infiera los tipos de datos.


export {}