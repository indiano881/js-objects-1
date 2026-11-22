// JS OBJECTS - EXERCISES
// Read the instructions in exercises.html and write your code under each "// Ex" comment.
// Check your results in the browser console.
// Ratings are approximate.

// ---------- DATA: don't change these, unless an exercise asks you to ----------

const favouriteMovie = {
  title: "Back to the Future",
  year: 1985,
  rating: 8.5,
  genres: ["Sci-Fi", "Comedy", "Adventure"],
  director: {
    name: "Robert Zemeckis",
    country: "USA",
  },
  cast: [
    { name: "Michael J. Fox", role: "Marty McFly" },
    { name: "Christopher Lloyd", role: "Doc Brown" },
  ],
  watched: true,
};

const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genres: ["Sci-Fi", "Action", "Thriller"],
    director: { name: "Christopher Nolan", country: "UK" },
    cast: [
      { name: "Leonardo DiCaprio", role: "Cobb" },
      { name: "Elliot Page", role: "Ariadne" },
      { name: "Tom Hardy", role: "Eames" },
    ],
    watched: true,
  },
  {
    id: 2,
    title: "Spirited Away",
    year: 2001,
    rating: 8.6,
    genres: ["Animation", "Fantasy", "Adventure"],
    director: { name: "Hayao Miyazaki", country: "Japan" },
    cast: [
      { name: "Rumi Hiiragi", role: "Chihiro" },
      { name: "Miyu Irino", role: "Haku" },
    ],
    watched: false,
  },
  {
    id: 3,
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    genres: ["Crime", "Drama"],
    director: { name: "Francis Ford Coppola", country: "USA" },
    cast: [
      { name: "Marlon Brando", role: "Vito Corleone" },
      { name: "Al Pacino", role: "Michael Corleone" },
    ],
    watched: false,
  },
  {
    id: 4,
    title: "Parasite",
    year: 2019,
    rating: 8.5,
    genres: ["Thriller", "Drama", "Comedy"],
    director: { name: "Bong Joon-ho", country: "South Korea" },
    cast: [
      { name: "Song Kang-ho", role: "Kim Ki-taek" },
      { name: "Choi Woo-shik", role: "Kim Ki-woo" },
    ],
    watched: true,
  },
  {
    id: 5,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genres: ["Sci-Fi", "Action"],
    director: { name: "The Wachowskis", country: "USA" },
    cast: [
      { name: "Keanu Reeves", role: "Neo" },
      { name: "Carrie-Anne Moss", role: "Trinity" },
      { name: "Laurence Fishburne", role: "Morpheus" },
    ],
    watched: true,
  },
  {
    id: 6,
    title: "Toy Story",
    year: 1995,
    rating: 8.3,
    genres: ["Animation", "Comedy", "Family"],
    director: { name: "John Lasseter", country: "USA" },
    cast: [
      { name: "Tom Hanks", role: "Woody" },
      { name: "Tim Allen", role: "Buzz Lightyear" },
    ],
    watched: false,
  },
  {
    id: 7,
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    genres: ["Sci-Fi", "Drama", "Adventure"],
    director: { name: "Christopher Nolan", country: "UK" },
    cast: [
      { name: "Matthew McConaughey", role: "Cooper" },
      { name: "Anne Hathaway", role: "Brand" },
      { name: "Jessica Chastain", role: "Murph" },
    ],
    watched: false,
  },
  {
    id: 8,
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    genres: ["Crime", "Drama"],
    director: { name: "Quentin Tarantino", country: "USA" },
    cast: [
      { name: "John Travolta", role: "Vincent Vega" },
      { name: "Uma Thurman", role: "Mia Wallace" },
      { name: "Samuel L. Jackson", role: "Jules Winnfield" },
    ],
    watched: true,
  },
];

// ---------- PART 1: ONE OBJECT (use favouriteMovie) ----------

// Ex 1
favouriteMovie.wakaka= "yop"
delete favouriteMovie.genres
console.log(favouriteMovie)
// Ex 2

// Ex 3

// Ex 4

// Ex 5

// Ex 6
// Remember: a method that uses `this` must NOT be an arrow function

// ---------- PART 2: ARRAY OF OBJECTS (use movies) ----------

// Ex 7

// Ex 8

// Ex 9

// Ex 10

// Ex 11
// New tool: array.includes(value) returns true if the array contains that value
// Example: ["a", "b"].includes("b") -> true

// Ex 12

// Ex 13

// ---------- PART 3: DOM ----------

// Ex 14

// Ex 15

// ---------- BONUS ----------

// Bonus
