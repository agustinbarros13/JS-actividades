function removeDuplicates(param) {
  const uniqueSet = new Set(param) // se crea el set para que elimine automáticamente los elementos duplicados.
  return Array.from(uniqueSet) // Convertimos el conjunto Set de nuevo en un array y lo devolvemos
}

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
console.log(removeDuplicates(duplicates))
