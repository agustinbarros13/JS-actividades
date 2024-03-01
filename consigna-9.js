function sumAll(param) {
  let total = 0
  for (let number of param) {
    console.log('+:', number)
    total += number
    console.log('Suma parcial:', total)
  }
  console.log('total:', total)
}

const numbers = [1, 2, 3, 5, 45, 37, 58]
console.log(sumAll(numbers))
