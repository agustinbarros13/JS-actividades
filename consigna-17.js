const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}

for (let caracteristicas in alien) {
  console.log(caracteristicas + ': ' + alien[caracteristicas])
}
