function averageWord(param) {
  let sumLengthStrings = 0
  let sumNumbers = 0
  let stringCount = 0
  let numberCount = 0

  for (let element of param) {
    if (typeof element === 'string') {
      sumLengthStrings += element.length
      stringCount++
    } else if (typeof element === 'number') {
      sumNumbers += element
      numberCount++
    }
  }

  const averageStringLengths = sumLengthStrings / stringCount
  const averageNumbers = sumNumbers / numberCount

  return {
    averageStringLengths,
    averageNumbers
  }
}

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
const averages = averageWord(mixedElements)
console.log('Promedio de longitudes de strings:', averages.averageStringLengths)
console.log('Promedio de números:', averages.averageNumbers)
