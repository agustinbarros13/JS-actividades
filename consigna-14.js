function repeatCounter(param) {
  const countMap = {}
  for (let word of param) {
    if (countMap[word]) {
      countMap[word]++
    } else {
      countMap[word] = 1
    }
  }
  return countMap
}
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
console.log(repeatCounter(counterWords))
