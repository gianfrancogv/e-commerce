const productos = [
  {id: 1, artista: 'Limp Bizkit', titulo: 'Chocolate Starfish and the Hot Dog Flavored Water', precio: 11, img: '/img/chocolate starfish.jpeg', idCat: 2, stock: 100},
  {id: 2, artista: 'Daft Punk', titulo: 'Discovery', precio: 12.7, img: '/img/discovery.png', idCat: 2, stock: 100},
  {id: 3, artista: 'Queen', titulo: 'Hot Space', precio: 15, img: '/img/hot space.jpg', idCat: 1, stock: 100},
  {id: 4, artista: 'Green Day', titulo: 'Dookie', precio: 8.9, img: '/img/dookie.jpeg', idCat: 2, stock: 100},
  {id: 5, artista: 'Linkin Park', titulo: 'Hybrid Theory', precio: 10, img: '/img/hybrid theory.jpeg', idCat: 2, stock: 100},
  {id: 6, artista: 'Nirvana', titulo: 'In Utero', precio: 9.99, img: '/img/in utero.jpg', idCat: 1, stock: 100},
  {id: 7, artista: 'Foo Fighters', titulo: 'In Your Honor', precio: 9.2, img: '/img/in your honor.jpeg', idCat: 2, stock: 100},
  {id: 8, artista: 'Led Zeppelin', titulo: 'Led Zeppelin III', precio: 19.99, img: '/img/led zeppelin iii.png', idCat: 1, stock: 100},
  {id: 9, artista: 'Metallica', titulo: 'Master Of Puppets', precio: 17, img: '/img/master of puppets.jpeg', idCat: 1, stock: 100},
  {id: 10, artista: 'Oasis', titulo: '(What’s the Story) Morning Glory?', precio: 10, img: '/img/morning glory.jpeg', idCat: 2, stock: 100},
  {id: 11, artista: 'Megadeth', titulo: 'Rust In Peace', precio: 14.24, img: '/img/rust in peace.jpeg', idCat: 1, stock: 100},
  {id: 12, artista: 'Queens Of The Stone Age', titulo: 'Songs For The Deaf', precio: 12, img: '/img/songs for the deaf.webp', idCat: 2, stock: 100},
  {id: 13, artista: 'Blink-182', titulo: 'Take Off Your Pants And Jacket', precio: 7, img: '/img/take off your pants and jacket.webp', idCat: 2, stock: 100},
  {id: 14, artista: 'Rolling Stones', titulo: 'Tattoo You', precio: 18.9, img: '/img/tattoo you.jpeg', idCat: 1, stock: 100},
  {id: 15, artista: 'Pearl Jam', titulo: 'Ten', precio: 15, img: '/img/ten.jpeg', idCat: 1, stock: 100},
  {id: 16, artista: 'Aerosmith', titulo: 'Get A Grip', precio: 18.32, img: '/img/get a grip.jpg', idCat: 1, stock: 100},
  {id: 17, artista: 'Bon Jovi', titulo: 'Slippery When Wet', precio: 15.22, img: '/img/slippery when wet.jpg', idCat: 1, stock: 100},
  {id: 18, artista: 'Guns N Roses', titulo: 'Appetite For Destruction', precio: 24.99, img: '/img/appetite for destruction.jpeg', idCat: 2, stock: 100},
  {id: 19, artista: 'Blur', titulo: 'Blur', precio: 6.99, img: '/img/blur.jpeg', idCat: 2, stock: 100},
  {id: 20, artista: 'Radiohead', titulo: 'The Bends', precio: 12.99, img: '/img/the bends.jpg', idCat: 2, stock: 100},
  {id: 21, artista: 'System Of A Down', titulo: 'Mesmerize', precio: 13, img: '/img/mesmerize.jpeg', idCat: 2, stock: 100},
]

export const getProductos = () => {
  return new Promise( (resolve) => {
    setTimeout( () => {
      resolve(productos);
    }, 300)
  })
}

// Funcion similar pero que ahora retorne un solo item

export const getUnProducto = (id) => {
  return new Promise( resolve => {
    setTimeout( () => {
        const producto = productos.find(prod => prod.id == id);
        resolve(producto);
    }, 300)
  })
}

// Creamos una funcion que retorne toda la categoria:

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise(resolve => {
    setTimeout( () => {
      const productosCategoria = productos.filter(prod => prod.idCat == idCategoria);
      resolve(productosCategoria);
    }, 300)
  })
}