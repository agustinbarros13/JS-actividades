//Iré modificando la cons avengers para que no se pisen entre sí.
//1.1
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers[0])
//1.2
const avengers1 = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
avengers1[0] = 'IRONMAN'
console.log(avengers1)
//1.3
const avengers3 = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers3.length)
//1.4
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
rickAndMortyCharacters.push('Morty', 'Summer')
console.log(rickAndMortyCharacters[4])
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]) //dos posibles soluciones.
//1.5
const rickAndMortyCharacter = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
const primerPersonaje = rickAndMortyCharacter.shift()
const ultimoPersonaje = rickAndMortyCharacter.pop()
console.log(
  'los personajes eliminados son:',
  primerPersonaje,
  'y',
  ultimoPersonaje
)
console.log(' los personajes restantes son:', rickAndMortyCharacter)
//1.6
const rickAndMortyCharacters1 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters1.splice(1, 1) //indico desde que elemento a que elemento voy a eliminar.
console.log(rickAndMortyCharacters1)
