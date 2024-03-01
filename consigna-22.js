const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    let replaced = false
    for (let j = 0; j < fruits.length; j++) {
      if (!foodSchedule.some((food) => food.name === fruits[j])) {
        foodSchedule[i].name = fruits[j]
        replaced = true
        break
      }
    }
    if (!replaced) {
      foodSchedule[i].name = 'Non-vegan dish'
    }
  }
}

console.log(foodSchedule)
