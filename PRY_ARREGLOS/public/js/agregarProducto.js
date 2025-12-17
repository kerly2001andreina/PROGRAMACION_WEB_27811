// console.log('agregar producto js');

var btn_agregar = document.getElementById('btn_agregar');
var arreglos_productos = [];

btn_agregar.addEventListener('click', function (event) {
    var nombre_producto = document.getElementById('txt_nombre_producto');
    var lista_producto = document.getElementById('lista_productos');
    if (nombre_producto != '') {
        var elementoLI = document.createElement('li');
        elementoLI.classList.add('list-group-item');
        // elementoLI se agregara el nombre de producto
        elementoLI.textContent = nombre_producto.value;
        lista_producto.appendChild(elementoLI);
        nombre_producto.value = '';

        arreglos_productos.push(nombre_producto.value);
    }
    else {
        console.log("POR FAVOR INGRESE UN PRODUCTO VALIDO!")
    }

    var productos_mayus = arreglos_productos.map(function (producto) {
        return producto.toUpperCase();
    });

    
    

});

