const goodProducts = []
const badProducts = []
const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

// Iterar sobre el array de productos.
for (let product of products) {
  // Verificar si el producto tiene más de 20 ventas.
  if (product.sellCount > 20) {
    // Si tiene más de 20 ventas, agregarlo a goodProducts.
    goodProducts.push(product)
  } else {
    // Si tiene 20 o menos ventas, agregarlo a badProducts.
    badProducts.push(product)
  }
}

// Mostrar los productos buenos y malos por consola segun su índice de ventas.
console.log('Productos con más de 20 ventas:', goodProducts)
console.log('Productos con 20 o menos ventas:', badProducts)
