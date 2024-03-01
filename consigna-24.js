const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

let totalSales = 0 // Inicializamos la variable totalSales para almacenar el total de ventas.

// Iteramos sobre cada producto en el array products.
for (let product of products) {
  totalSales += product.sellCount // Sumamos el valor de sellCount de cada producto al totalSales.
}

console.log('El total de ventas es:', totalSales) // Imprimimos el total de ventas en la consola de todos los productos.
