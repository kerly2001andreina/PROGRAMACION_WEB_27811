// console.log('cargado');

// elemtnso persona
var persona = {
    nombres: "Kerly Andreina",
    apellidos: "Chqi Aguidna",
    edad: 2,
    es_profesor: false,
    estatura: 1.50,
};


var datos_persona = document.getElementById('datos_persona');

datos_persona.innerHTML = `
    LA PERSONA SE LLAMA ${persona.nombres} ${persona.apellidos}
    SU EDAD ES ${persona.edad}
    ES PROFESOR? ${persona.es_profesor ? 'SI' : 'NO'}
    SU ESTATURA ES ${persona.estatura}
`;


var txt_nombres = document.getElementById("txt_nombres");
var txt_apellidos = document.getElementById("txt_apellidos");
var txt_edad = document.getElementById("txt_edad");
var sel_es_profesor = document.getElementById("sel_es_profesor");
var txt_estatura = document.getElementById("txt_estatura");
var check_mayor_edad = document.getElementById("check_mayor_edad");


txt_nombres.value = persona.nombres;
txt_apellidos.value = persona.apellidos;
txt_edad.value = persona.edad;
sel_es_profesor.value = persona.es_profesor ? 'SI' : 'NO';
txt_estatura.value = persona.estatura;


check_mayor_edad.checked = persona.edad >= 18 ? true : false;


var btn_actualizar = document.getElementById("btn_actualizar");
// btn_actualizar.addEventListener('click', function() {
//actualizamos los valores del objeto persona
//  persona.nombres = txt_nombres.value;
// persona.apellidos = txt_apellidos.value;
//  persona.edad = parseInt(txt_edad.value);
//  persona.es_profesor = (seleccione_es_profesor.value === 'SI') ? true : false;
//  persona.estatura = parseFloat(txt_estatura.value);

btn_actualizar.addEventListener('click', function () {

    
    persona.nombres = txt_nombres.value;
    persona.apellidos = txt_apellidos.value;
    persona.edad = parseInt(txt_edad.value);
    persona.es_profesor = (sel_es_profesor.value === 'SI') ? true : false;
    persona.estatura = parseFloat(txt_estatura.value);

    
    check_mayor_edad.checked = persona.edad >= 18 ? true : false;

    //datos actualizadso
    datos_persona.innerHTML = `
        LA PERSONA SE LLAMA ${persona.nombres} ${persona.apellidos}
        SU EDAD ES ${persona.edad}
        ES PROFESOR? ${persona.es_profesor ? 'SI' : 'NO'}
        SU ESTATURA ES ${persona.estatura}
    `;
});
