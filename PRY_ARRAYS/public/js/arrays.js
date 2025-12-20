var btn_registrar = document.getElementById('btn_registrar');
var lista_visual = document.getElementById('lista_visual');
var span_contador = document.getElementById('contador');

var arreglo_invitados = [];

var input_nombre = document.getElementById('txt_invitado');
input_nombre.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        btn_registrar.click();
    }
});
btn_registrar.addEventListener('click', function () {
    
    var input_nombre = document.getElementById('txt_invitado');
    var nombre = input_nombre.value;

    if (nombre !== '') {
        
        var li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

        var textoNombre = document.createTextNode(nombre);

        var btnEliminar = document.createElement('button');
        btnEliminar.textContent = "Sacar de lista";
        btnEliminar.classList.add('btn', 'btn-outline-danger', 'btn-sm');

        btnEliminar.addEventListener('click', function() {

            lista_visual.removeChild(li);
            
            var posicion = arreglo_invitados.indexOf(nombre);
            if (posicion > -1) {
                arreglo_invitados.splice(posicion, 1);
            }
            
            actualizarContador();
        });

        li.appendChild(textoNombre);
        li.appendChild(btnEliminar);
        lista_visual.appendChild(li);

        arreglo_invitados.push(nombre);
        
        input_nombre.value = '';

        actualizarContador();

    } else {
        alert("¡Escribe un nombre por favor!");
    }
});

function actualizarContador() {
    var total = arreglo_invitados.length;
    span_contador.textContent = total;
    
    console.log("Lista actual:", arreglo_invitados);
}