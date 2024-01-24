const productos = [
    {id: 1, nombre: 'Yerba', precio: 500, img: './img/yerba.jpg', idCat: 1},
    {id: 2, nombre: 'Fideos', precio: 500, img: './img/fideos.jpg', idCat: 2},
    {id: 3, nombre: 'Arroz', precio: 500, img: './img/arroz.jpg', idCat: 3},
    {id: 4, nombre: 'Aceite', precio: 500, img: './img/aceite.jpg', idCat: 3}
]

export const getProductos = () => {
  return new Promise( (resolve) => {
    setTimeout( () => {
      resolve(productos);
    }, 2000)
  })
}

// Funcion similar pero que ahora retorne un solo item

export const getUnProducto = (id) => {
  return new Promise( resolve => {
    setTimeout( () => {
        const producto = productos.find(prod => prod.id == id);
        resolve(producto);
    }, 2000)
  })
}

// Creamos una funcion que retorne toda la categoria:

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise(resolve => {
    setTimeout( () => {
      const productosCategoria = productos.filter(prod => prod.idCat == idCategoria);
      resolve(productosCategoria);
    }, 2000)
  })
}