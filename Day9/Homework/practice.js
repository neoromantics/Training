//create a function that takes in two parameters,
//a package name and a rating(number between 0 and 10),
//and returns all shows available with that package,
//with that rating or higher
const showsWithRating = (package, _rating) => {
  const networks = package.networks;
  const availableShows = shows.filter((show) =>
    networks.includes(show.network)
  );
  return availableShows.filter((show) => show.rating > _rating);
};

//given an array and a chunk size, divide the
//array into many sub-arrays where each sub-array
//has the specified length. E.g
//chunkArray([1,2,3,4,5,6,7,8,9,10,11,12,13],5)
//should return [[1,2,3,4,5],[6,7,8,9,10],[11,12,13]]

const chunkArray = (array, num) => {
  const remainder = array.length % num;
  const results = [];
  for (let i = 0; i < array.length; i = i + num) {
    const result = array.slice(i, i + num);
    results.push(result);
  }
  return results;
};

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5));
