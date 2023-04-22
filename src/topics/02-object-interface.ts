
// Objetos, arreglos, interfaces...

// Arreglos: 
const skills: string[] = [
    'Bash', 
    'Counter', 
    'Healing',
];

// Objetos y interfaces:
// Con las interfaces podemos asignarle un tipo de dato a cada
// propiedad de nuestros objetos.
// De esta manera el podemos dar un tipado mas preciso a nuestros objetos
// y asi evitar errores en el futuro.
interface Character {
    name: string;
    hp: number;
    skills: string[];
    homeTown?: string; // ==> El signo de interrogacion indica que es opcional
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
}

strider.homeTown = 'Rivendell';

console.table(strider);

export {}