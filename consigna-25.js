const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

let totalSellCount = 0

// Calcular la suma total de las ventas
for (let product of products) {
  totalSellCount += product.sellCount
}

// Calcular la media de ventas
const mediaSellCount = totalSellCount / products.length

// Mostrar por consola la suma total y la media de ventas
console.log('Suma total de las ventas:', totalSellCount)
console.log('Media de ventas:', mediaSellCount)
