
var seleccionado = document.querySelectorAll('input[name="color"]');
var txt_resultado = document.getElementById('txt_resultado');
var no_seleccionado=document.querySelectorAll('input[name="color"]');

if (txt_resultado){
    txt_resultado.textContent = "SELECCIONE UN COLOR";
}
seleccionado.forEach(elemento => {
    elemento.addEventListener('click', function(event) {
        console.log("SE SELECCIONO EL COLOR " + elemento.value.toUpperCase());
        if (elemento.value == 'rojo') {
            txt_resultado.textContent = 'DETENGASE!!!';
        } else if (elemento.value == 'amarillo') {
            txt_resultado.textContent = 'CUIDADO!!!';
        } else if (elemento.value == 'verde') {
            txt_resultado.textContent = 'AVANCE!!!';
        }
    });

    if(elemento.checked){
        elemento.click();
    }
})

// if(no_seleccionado){
//     no_seleccionado.forEach(elemento => {
//         elemento.addEventListener('click', function(event) {
//             console.log("NO SELECCIONO EL COLOR " + elemento.value.toUpperCase());
//         })
//     })
// }

