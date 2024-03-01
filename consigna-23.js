const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]

// Crear arrays para almacenar películas según su duración y luego clasificarlas.
const smallMovies = []
const mediumMovies = []
const largeMovies = []

// Iterar sobre cada película para obtener la duracón.
for (let movie of movies) {
  // Filtra las películas según su duración.
  if (movie.durationInMinutes < 100) {
    smallMovies.push(movie)
  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    mediumMovies.push(movie)
  } else {
    largeMovies.push(movie)
  }
}

// Imprimir los arrays de películas en la consola según el resultado obtenido se pushearan a un array.
console.log('Peliculas pequeñas (menos de 100 minutos):')
console.log(smallMovies)
//\n se aplica para pasar a una nueva línea.
console.log('\nPeliculas medianas (entre 100 y 200 minutos):')
console.log(mediumMovies)

console.log('\nPeliculas grandes (mas de 200 minutos):')
console.log(largeMovies)
