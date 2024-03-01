function average(param) {
  let sum = 0
  for (let number of param) {
    sum += number
  }
  return sum / param.length
}

const numbers = [12, 21, 38, 5, 45, 37, 6]
console.log('el resultado promedio es:', average(numbers))
