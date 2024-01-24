const productos = [
  {id: 1, artista: 'Limp Bizkit', nombre: 'Chocolate Starfish and the Hot Dog Flavored Water', precio: 11, img: '/img/chocolate starfish.jpeg', idCat: 2},
  {id: 2, artista: 'Daft Punk', nombre: 'Discovery', precio: 12.7, img: '/img/discovery.png', idCat: 2},
  {id: 3, artista: 'Green Day', nombre: 'Dookie', precio: 8.9, img: '/img/dookie.jpeg', idCat: 2},
  {id: 4, artista: 'Linkin Park', nombre: 'Hybrid Theory', precio: 10, img: '/img/hybrid theory.jpeg', idCat: 2},
  {id: 5, artista: 'Queen', nombre: 'Hot Space', precio: 15, img: '/img/hot space.jpg', idCat: 1},
  {id: 6, artista: 'Nirvana', nombre: 'In Utero', precio: 9.99, img: '/img/in utero.jpg', idCat: 1},
  {id: 7, artista: 'Foo Fighters', nombre: 'In Your Honor', precio: 9.2, img: '/img/in your honor.jpeg', idCat: 2},
  {id: 8, artista: 'Led Zeppelin', nombre: 'Led Zeppelin III', precio: 19.99, img: '/img/led zeppelin iii.png', idCat: 1},
  {id: 9, artista: 'Metallica', nombre: 'Master Of Puppets', precio: 17, img: '/img/master of puppets.jpeg', idCat: 1},
  {id: 10, artista: 'Oasis', nombre: '(What’s the Story) Morning Glory?', precio: 10, img: '/img/morning glory.jpeg', idCat: 2},
  {id: 11, artista: 'Megadeth', nombre: 'Rust In Peace', precio: 14.24, img: '/img/rust in peace.jpeg', idCat: 1},
  {id: 12, artista: 'Queens Of The Stone Age', nombre: 'Songs For The Deaf', precio: 12, img: '/img/songs for the deaf.webp', idCat: 2},
  {id: 13, artista: 'Blink-182', nombre: 'Take Off Your Pants And Jacket', precio: 7, img: '/img/take off your pants and jacket.webp', idCat: 2},
  {id: 14, artista: 'Rolling Stones', nombre: 'Tattoo You', precio: 18.9, img: '/img/tattoo you.jpeg', idCat: 1},
  {id: 15, artista: 'Pearl Jam', nombre: 'Ten', precio: 15, img: '/img/ten.jpeg', idCat: 1},
  {id: 16, artista: 'Aerosmith', nombre: 'Get A Grip', precio: 18.32, img: '/img/get a grip.jpg', idCat: 1},
  {id: 17, artista: 'Bon Jovi', nombre: 'Slippery When Wet', precio: 15.22, img: '/img/slippery when wet.jpg', idCat: 1},
  {id: 18, artista: 'Guns N Roses', nombre: 'Appetite For Destruction', precio: 24.99, img: '/img/appetite for destruction.jpeg', idCat: 2},
  {id: 19, artista: 'Blur', nombre: 'Blur', precio: 6.99, img: '/img/blur.jpeg', idCat: 2},
  {id: 20, artista: 'Radiohead', nombre: 'The Bends', precio: 12.99, img: '/img/the bends.jpg', idCat: 2},
  {id: 21, artista: 'System Of A Down', nombre: 'Mesmerize', precio: 13, img: '/img/mesmerize.jpeg', idCat: 2},
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