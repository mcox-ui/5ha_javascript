let nombre = "Ana";
let edad = 25;
let saludo = "Hola, me llamo " + nombre + " y tengo " + edad + " años.";

let saludo2 = `Hola, me llamo ${nombre} y tengo ${edad} años.`; 


console.log(saludo);
console.log(saludo2);

// La forma antigua:
let poema = "Las rosas son rojas,\n" +
            "las violetas son azules.";

// Con Template Literals:
let poema2 = `Las rosas son rojas,
las violetas son azules.`;

console.log(poema);
console.log(poema2);
