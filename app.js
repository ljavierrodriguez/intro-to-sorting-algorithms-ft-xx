
// Variable Auxiliar
let a = 10;
let b = 20;

console.log(a);
console.log(b);
let aux = a; // 10;
a = b; // 20;
b = aux; // 10;
console.log(a);
console.log(b);


let nombre1 = "Pedro";
let nombre2 = "Paco";

console.log(nombre1);
console.log(nombre2);
let nombreAux = nombre1;
nombre1 = nombre2;
nombre2 = nombreAux;
console.log(nombre1);
console.log(nombre2);

// Destructuring
let x = 100;
let y = 50;
console.log(x);
console.log(y);

[y, x] = [x, y];

console.log(x);
console.log(y);


let arr = [4, 2, 1, 5, 3];


let result = bubbleSort([...arr]);

console.log(arr);
console.log(result);

let result2 = bubbleSort2([...arr]);

console.log(arr);
console.log(result2);

// i 0
// j 0 1
// aux 4

function bubbleSort(arr = []) {
    for(let i = 0; i < arr.length - 1; i++){ // repeticiones 
        for(let j = 0; j < arr.length - 1; j++){ // comparacion y intercambio de valores
            if(arr[j] > arr[j + 1]){
                let aux = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = aux;
            }
        }
    }
    return arr;
}

function bubbleSort2(arr = []){
    let stop = arr.length - 1;
    while(stop > 0){
        let index = 0;
        while(index < stop){
            if(arr[index] > arr[index + 1]){
                let aux = arr[index];
                arr[index] = arr[index+1];
                arr[index+1] = aux;
            }
            index++;
        }
        stop--;
    }
    return arr;
}

arr.sort((a, b) => a - b); // menor a mayor
arr.sort((a, b) => b - a); // mayor a menor

console.log(arr)


let frutas = ["Pera", "Manzana", "Uva", "Melon", "Sandia", "Kiwi", "Nispero", "Limon", "Mango"];
//let frutas = ["Kiwi", "Melon", "Uva", "Pera", "Sandia", "Manzana", "Nispero", "Limon", "Mango"];

function selectedSort(arr = []){
    let min = 1;
    while(min < arr.length - 1){
        for(let i = min + 1; i < arr.length; i++){
            if(arr[min] > arr[i]){
                let aux = arr[min];
                arr[min] = arr[i];
                arr[i] = aux;
            }
        }
        min++;
    }

    return arr;
}
let resultado = null;
console.log(frutas);

resultado = selectedSort([...frutas]);
console.log("Selected Sorting")
console.time()
console.log(resultado);
console.timeEnd()

resultado = bubbleSort2([frutas]);
console.log("Bubble Sorting")
console.time()
console.log(resultado);
console.timeEnd()

