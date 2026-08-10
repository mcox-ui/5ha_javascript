// console.log("Hola mundo!");

// If else sintaxis

// if( condicion ){    

//  // Se ejecuta el codigo

// }

// let isMember = false;

// if (isMember) {

//     console.log("Eres socio!"); 

// } else {

//     console.error("Aun no eres miembro del club");
// }


// let temperatura = prompt("Ingrese su temperatura.");

// if (temperatura < 37.5) {

//     alert("Prioridad baja");

// } else {

//     alert("Prioridad alta");

// } 

// comparacion simple y estricta

// let valueA = 3;
// let valueB = "3";

// if (valueA === valueB) {

//     console.log("Los valores son iguales");
//     alert("Los valores son iguales");
    
// } else {
    
//     console.error("Los valores NO son iguales");
//     alert("Los valores NO son iguales");

// }


// let edad=prompt("Ingrese su edad.")

// if(edad<18) {

//      alert("No puede pasar al bar.");
//      console.error("No puede pasar al bar, no tiene la edad suficiente.")
 
// } else if(edad<21) {

//     alert("Puede pasar al bar, pero no puede tomar alcohol.")
//     console.warn("Puede pasar al bar, pero no puede tomar alcohol.")

// } else {
    
//     alert("Puede pasar al bar y tomar alcohol.")
//     console.log("Puede pasar al bar y tomar alcohol.")
// }


// if (edad >= 25) {

//     alert("Puede pasar al bar.") 

//     let numeroSecreto=10;
//     let loQueDiceElUsuario= prompt("¿Cuál es el número secreto?");

//     if (loQueDiceElUsuario == numeroSecreto) {

//         alert("Puede pasar a la fiesta.")

//     }  else {

//         alert("No puede pasar a la fiesta, ese no es el número secreto.")
//     }

// }

// Resolucion con Pseudocodigo
// 1. Preguntarle a la persona de que país procede.
// 2. Si procede de Asia:
    // Chequeamos la temperatura.
// 3. Si procede de Europa:
    // Chequeamos la temperatura.
// 4. Sino, les damos la bienvenida.

// 1.
let procedencia = prompt("Ingrese su pais de procedencia").toLowerCase()

if ("asia" == procedencia) {
    alert("Chequear temperatura");

} else if ("europa" == procedencia) {

    alert("Chequear temperatura")
    console.log("Chequear temperatura")

} else {

    alert("Te damos la bienvenida")
    console.log("Te damos la bienvenida")
}