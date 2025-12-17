var btn_calcular = document.getElementById("btn_calcular");

btn_calcular.addEventListener("click", function() {
    let n7 = document.getElementById("txt_numero_1").value;
    let n8 = document.getElementById("txt_numero_2").value;
    let txt_resultado = document.getElementById("txt_resultado");
    let numeros = "";
    for (let i = n7; i <= n8; i++) {
        numeros+= `${i} <br>`;
    }
    txt_resultado.innerHTML = numeros;
});