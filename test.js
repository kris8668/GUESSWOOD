async function getMovie(){
const movie = await fetch('http://localhost:3000/movie');
const result = await movie.json();
console.log(result);


}


