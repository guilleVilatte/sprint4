// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(movies => movies.director);
  console.log(result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let moviesDirector = array.filter(movies => movies.director == director);
  //console.log(moviesDirector);
  return moviesDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesDirector = array.filter(movies => movies.director == director);
  let valor = moviesDirector.reduce((counter, item) => (counter + item.score), 0);
  let value = (valor/moviesDirector.length);
  console.log(value);
  return value;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let title = array.map(movies => movies.title);
  let order = title.sort();
  let firstTwenty = order.slice(0,20);
  return firstTwenty;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let arraySlice = array.slice();
  let year = arraySlice.sort((a,b) => 
  {if (a.year < b.year){
    return -1;
  }
  if (a.year > b.year){
    return 1;
  }
  if (a.title < b.title){
    return -1;
  }
  if (a.title > b.title){
    return 1;
  }
  return 0});
  return year;
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
