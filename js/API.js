const url = 'http://localhost:8085/producto';
const urlproductos= 'http://localhost:8085/productos';
const urlProducto= 'http://localhost:8085/producto/{idProducto}';

// Cuando se crea un nuevo Producto
export const nuevoProducto = async producto => {

    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify( producto ),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}


// Obtiene todos los Productos
export const obtenerProductos = async()=>{

    try {
        const resultado = await fetch(urlproductos);
        const productos = await resultado.json();
        
        return productos;
    } catch (error) {
        console.log(error)
    }
}

export const obtenerProducto = async idProducto => {
    try {
        const resultado = await fetch(urlProducto.replace('{idProducto}', idProducto));
        const producto = await resultado.json();

        return producto;
    } catch (error) {
        console.log(error);
    }
}

// Elimina un Producto...
export const eliminarProducto = async id => {
    
    try {
       
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

export const editarProducto = async producto => {

    try {
        await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}


