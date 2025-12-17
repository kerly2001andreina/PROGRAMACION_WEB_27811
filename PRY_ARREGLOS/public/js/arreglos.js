
//declara un arreglo
var frutas=["uva","pera","manzana","kiwi","sandia"];

// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);

//agrega al final
frutas.push("banana");
//agrega al inicio
frutas.unshift("camote");

//elimina el ultimo elemento
frutas.pop();
//elimina el primer elemento
frutas.shift();

//saber q de tamano es el arreglo
let tamanio_arrelgo_frutas=frutas.length;
// console.log(tamanio_arrelgo_frutas);

//mostrar el arreglo
frutas_forEach=frutas.forEach(function(fruta){
// console.log(fruta.toUpperCase())
return fruta.toUpperCase()
});


console.log("========================")
var frutas_map=frutas.map(function(fruta){
    // console.log(fruta.toUpperCase())
    return fruta.toUpperCase()
    });

console.log(frutas_forEach)
// console.log(frutas_map)

