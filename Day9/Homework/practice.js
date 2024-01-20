const shows = [
  { title: "A Little Late With Lilly Singh", network: "NBC", imdbRating: 1.5 },
  { title: "American Gods", network: "STARZ", imdbRating: 7.7 },
  { title: "American Idol", network: "ABC", imdbRating: 4.1 },
  { title: "Below Deck", network: "Bravo", imdbRating: 7.3 },
  { title: "Big Little Lies", network: "HBO", imdbRating: 8.5 },
  { title: "black-ish", network: "ABC", imdbRating: 7.1 },
  { title: "Bunheads", network: "Freeform", imdbRating: 7.6 },
  { title: "Dexter", network: "Showtime", imdbRating: 8.6 },
  { title: "Everything's Gonna Be Okay", network: "Freeform", imdbRating: 7.3 },
  { title: "Mom", network: "CBS", imdbRating: 7.2 },
  { title: "Outlander", network: "STARZ", imdbRating: 8.4 },
  { title: "Rebel", network: "BET", imdbRating: 5.4 },
  { title: "Riverdale", network: "CW", imdbRating: 6.8 },
  { title: "Silicon Valley", network: "HBO", imdbRating: 8.5 },
  { title: "Southern Charm", network: "Bravo", imdbRating: 6.2 },
  { title: "SpongeBob SquarePants", network: "Nickelodeon", imdbRating: 8.2 },
  { title: "Rocket Power", network: "Nickelodeon", imdbRating: 6.2 },
  { title: "The Amazing Race", network: "CBS", imdbRating: 7.6 },
  { title: "The Fosters", network: "Freeform", imdbRating: 7.9 },
  { title: "Top Chef", network: "Bravo", imdbRating: 7.6 },
  { title: "Tyler Perry's The Oval", network: "BET", imdbRating: 4.0 },
  { title: "Zoey's Extraordinary Playlist", network: "NBC", imdbRating: 8.1 },
];

const packages = [
  {
    name: "Basic",
    networks: ["CBS", "CW", "ABC", "NBC"],
    price: 9.9,
  },
  {
    name: "Gold",
    networks: [
      "CBS",
      "CW",
      "ABC",
      "NBC",
      "BET",
      "Freeform",
      "Nickelodeon",
      "Bravo",
      "HBO",
      "Showtime",
      "STARZ",
    ],
    price: 37.9,
  },
  {
    name: "Select",
    networks: [
      "CBS",
      "CW",
      "ABC",
      "NBC",
      "BET",
      "Freeform",
      "Nickelodeon",
      "Bravo",
    ],
    price: 17.9,
  },
  {
    name: "Silver",
    networks: [
      "CBS",
      "CW",
      "ABC",
      "NBC",
      "BET",
      "Freeform",
      "Nickelodeon",
      "Bravo",
      "HBO",
      "Showtime",
    ],
    price: 27.9,
  },
];

// module.exports = packages;
// module.exports = shows;
//create a function that takes in two parameters,
//a package name and a rating(number between 0 and 10),
//and returns all shows available with that package,
//with that rating or higher
function filter_shows(packageName, rating) {
  const pack = packages.find((pack) => pack.name === packageName);
  const { networks } = pack;
  return shows.filter(
    (show) => show.imdbRating >= rating && networks.includes(show.network)
  );
}

//given an array and a chunk size, divide the
//array into many sub-arrays where each sub-array
//has the specified length. E.g
//chunkArray([1,2,3,4,5,6,7,8,9,10,11,12,13],5)
//should return [[1,2,3,4,5],[6,7,8,9,10],[11,12,13]]

const chunkArray = (array, num) => {
  const results = [];
  for (let i = 0; i < array.length; i = i + num) {
    const result = array.slice(i, i + num);
    results.push(result);
  }
  return results;
};

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5));
