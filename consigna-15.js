const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinrurón de Orión'
]

for (let product of products) {
  if (product.includes('Camiseta')) {
    console.log('las comisetas son:', product)
  }
}
