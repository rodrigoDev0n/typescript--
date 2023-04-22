
// Tipos basicos: 
const name: string = 'Rodrigo';

// Maneras de asignar mas de un tipo de dato:
let hpPoints: number | string = 95;
let isAlive: boolean | 'NO' = true;
// De esta manera podemos asignarle mas de un tipo de dato a una variable
// Tambien podemos asignarle un valor en especifico a una variable
// Como vemos en el ejemplo de isAlive que solo puede ser true o 'NO'.

hpPoints = 'FULL';
isAlive = 'NO';

console.log({ 
    name,
    hpPoints,
    isAlive
});


export {}
 