//1.1
const character = { name: 'Jack Sparrow', age: 10 }
character.age = 25
console.log(character)
//1.2
const firstName = 'Jon'
const lastName = 'Snow'
const age = 24

console.log(
  `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`
)
//1.3
const toy1 = { name: 'Buss myYear', price: 19 }
const toy2 = { name: 'Rallo mcKing', price: 29 }

const sumaPrecios = toy1.price + toy2.price
console.log(sumaPrecios)
//1.4
//declaro en let para poder reasignar o actualizar el valor.
let globalBasePrice = 10000
const car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 }
const car2 = { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000 }

// Actualiza globalBasePrice
globalBasePrice = 25000

// Actualiza el precio final sumandole la nueva let global actualizada
car1.finalPrice = car1.basePrice + globalBasePrice
car2.finalPrice = car2.basePrice + globalBasePrice

console.log(car1)
console.log(car2)
