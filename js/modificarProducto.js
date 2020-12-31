import { mostrarAlerta, validar } from './funciones.js';
import { obtenerProducto, editarProducto } from './API.js';

const urlParams = new URLSearchParams(window.location.search);
const idProducto = urlParams.get('id');

(async function () {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarProducto);
    
    let {nombre, descripcion, marca, precio, cantidad, rubro } = await obtenerProducto(idProducto);

    document.querySelector('#nombre').value = nombre;
    document.querySelector('#descripcion').value = descripcion;
    document.querySelector('#marca').value = marca;
    document.querySelector('#precio').value = precio;
    document.querySelector('#cantidad').value = cantidad;
    document.querySelector('#rubro').value = rubro;

    function validarProducto(e) {
        e.preventDefault();

        const producto = {
            id: idProducto,
            nombre:  document.querySelector('#nombre').value,
            descripcion:  document.querySelector('#descripcion').value,
            marca:  document.querySelector('#marca').value,
            precio:  document.querySelector('#precio').value,
            cantidad:  document.querySelector('#cantidad').value,
            rubro: document.querySelector('#rubro').value 
        };

        if (validar(producto)) {
            // Mostrar mensaje
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        editarProducto(producto);
    }
    
})();