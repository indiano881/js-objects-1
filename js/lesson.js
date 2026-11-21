/*
  ============================================================
   JS OBJECTS - LESSON STEPS (live coding, ~90 min)
  ============================================================
   This file only has comments. Live-code each step under its comment.
   Open index.html and keep the browser console open the whole time.
   Theme: MOVIES

   Already known: loops (for/while), functions + arrow functions, DOM + events,
                  arrays + forEach / slice / push / pop / shift / unshift

   (SKIP IF SHORT ON TIME) = drop these parts for a 60 min version
  ============================================================
*/


// ------------------------------------------------------------
// STEP 1 (~5 min) - WHY OBJECTS?
// ------------------------------------------------------------
// - Start from what they know: const movie = ["Inception", 2010, 8.8, true]
// - Ask the class: "What is movie[2]? And movie[3]?" -> we have to remember positions, so it is fragile
// - Idea: we want LABELS on our data -> an object = a collection of key: value pairs
// - Real-world analogy: an ID card / a movie poster: label + value


// ------------------------------------------------------------
// STEP 2 (~5 min) - CREATING AN OBJECT (object literal)
// ------------------------------------------------------------
// - Type: const movie = { title: "Inception", year: 2010, rating: 8.8, watched: true }
// - Point out: curly braces, key: value, COMMA between pairs, no comma problems at the end
// - Values can be any type: string, number, boolean (later: arrays, objects, functions)
// - console.log(movie) -> expand it in the console
// - typeof movie -> "object" (and typeof [] is also "object", fun fact)
// - Format it on multiple lines, one property per line: easier to read


// ------------------------------------------------------------
// STEP 3 (~8 min) - READING VALUES
// ------------------------------------------------------------
// - Dot notation: movie.title, movie.year
// - Bracket notation: movie["title"] -> the key is a STRING
// - Bracket notation with a variable:  const key = "rating";  movie[key]
//     -> try movie.key: it gives undefined! (it looks for a key literally called "key")
// - When we NEED brackets: variable keys, keys with spaces/dashes ("release-date")
// - Missing key -> undefined (not an error): movie.budget
// - Use values in a template string: `${movie.title} came out in ${movie.year}`


// ------------------------------------------------------------
// STEP 4 (~7 min) - CHANGING OBJECTS: update / add / delete
// ------------------------------------------------------------
// - Update: movie.rating = 9
// - Add (same syntax): movie.runtime = 148
// - Add with brackets: movie["language"] = "English"
// - Delete: delete movie.watched -> log it -> undefined
// - Ask the class: "movie is const... why could we change it?"
//     -> const means we can't REASSIGN the variable (movie = {} gives an error),
//        but we can change what is INSIDE the object. (We come back to this in step 11)


// ------------------------------------------------------------
// STEP 5 (~5 min) - YOUR TURN #1
// ------------------------------------------------------------
// Students, on their own:
//   1. Create an object for YOUR favourite movie (title, year, rating, at least 3 properties)
//   2. console.log 2 of its properties: one with dot notation, one with bracket notation
//   3. Add a "watched" property, then change the rating
// Walk around / pick 1-2 students to share their object


// ------------------------------------------------------------
// STEP 6 (~8 min) - NESTED DATA
// ------------------------------------------------------------
// - Add an ARRAY inside the object: genres: ["Sci-Fi", "Action", "Thriller"]
//     -> movie.genres          (the whole array)
//     -> movie.genres[0]       (first genre)
//     -> movie.genres.length
//     -> movie.genres.push("Drama")   (the array methods they know still work!)
// - Add an OBJECT inside the object: director: { name: "Christopher Nolan", country: "UK" }
//     -> movie.director.name
//     -> movie["director"]["country"]  (same thing with brackets)
// - Combine both: cast: [ { name: "Leonardo DiCaprio", role: "Cobb" }, { name: "Elliot Page", role: "Ariadne" } ]
//     -> movie.cast[1].name
//     -> Read it OUT LOUD left to right: "movie, its cast, item 1, its name"
// - Pitfall: movie.director.age.value -> error (can't read a property of undefined)


// ------------------------------------------------------------
// STEP 7 (~10 min) - ARRAYS OF OBJECTS
// ------------------------------------------------------------
// - Make a small list: const movies = [ {title, year, rating, watched}, ... ] with 3-4 movies
// - Access: movies[0], movies[0].title, movies[movies.length - 1].year
// - Loop with a classic for loop: for (let i = 0; i < movies.length; i++) -> movies[i].title
// - Same with forEach: movies.forEach((movie) => console.log(movie.title))
//     -> name the parameter in the SINGULAR (movie) and the array in the PLURAL (movies)
// - Add a condition inside the loop: log only movies after 2010
// - Accumulate: count the watched movies (let count = 0; count++)
// - Accumulate: sum the ratings, then average = total / movies.length
// - Add a movie: movies.push({ title: "...", ... })
// - Change a movie inside the array: movies[1].watched = true


// ------------------------------------------------------------
// STEP 8 (~5 min) - YOUR TURN #2
// ------------------------------------------------------------
// Students: loop over movies and log "Title (Year)" ONLY for movies that are not watched yet
//   Expected output example: "Parasite (2019)"
// Bonus for fast students: also log how many there are at the end


// ------------------------------------------------------------
// STEP 9 (~8 min) - LOOPING OVER AN OBJECT
// ------------------------------------------------------------
// - Arrays have indexes, objects have keys. How do we visit every key?
// - for...in:  for (const key in movie) { console.log(key, movie[key]) }
//     -> we MUST use movie[key] here, not movie.key (link back to step 3!)
//
// (SKIP IF SHORT ON TIME) - Object.keys / values / entries
// - Object.keys(movie)    -> an array of keys      -> .length = how many properties
// - Object.values(movie)  -> an array of values
// - Object.entries(movie) -> an array of [key, value] pairs
// - Because they return ARRAYS, we can use forEach (which they know):
//     Object.keys(movie).forEach((key) => console.log(`${key}: ${movie[key]}`))


// ------------------------------------------------------------
// STEP 10 (~12 min) - METHODS & `this`
// ------------------------------------------------------------
// - A value can also be a FUNCTION -> we call it a "method"
//     describe: function () { console.log("I am a movie") }
//     -> call it: movie.describe()   (with parentheses!)
//     -> movie.describe without () just shows the function
// - We already used methods without knowing it: console.log, movies.push, document.getElementById
// - Now we want describe() to print the title. Problem: how does the function know WHICH movie?
//     -> `this` = "the object BEFORE THE DOT" when the method is called
//     describe: function () { console.log(`${this.title} (${this.year})`) }
// - A method can CHANGE the object:
//     markWatched: function () { this.watched = true }
//     -> movie.markWatched(); console.log(movie.watched)
// - A method with a parameter:
//     rate: function (newRating) { this.rating = newRating }
// - Shorter method syntax (same thing): describe() { ... }
// - THE ARROW FUNCTION TRAP:
//     describeArrow: () => console.log(this.title)   -> undefined!
//     -> arrow functions do NOT get their own `this`
//     -> RULE: if a method uses `this`, write it as function () {} or with the short syntax
// - Show that `this` changes with the object: create 2 movies with the same describe method
//   (copy-paste it) -> movieA.describe() and movieB.describe() print different titles
// - With an array: movies.forEach((m) => m.describe()) if each movie has the method


// ------------------------------------------------------------
// STEP 11 (~8 min) - (SKIP IF SHORT ON TIME) REFERENCE vs COPY
// ------------------------------------------------------------
// - Type: const copy = movie;  copy.rating = 1;  console.log(movie.rating) -> 1 ?!
//     -> the variable holds a REFERENCE (an address), not the object itself
//     -> drawing on the board: two labels pointing to the same box
//     -> this is also why const objects can be changed (step 4)
// - Compare with numbers/strings: let a = 5; let b = a; b = 10; -> a is still 5
// - Real copy with spread: const realCopy = { ...movie };  realCopy.rating = 1 -> movie is unchanged
// - Spread + add/overwrite: const updated = { ...movie, rating: 9.5, watched: false }
// - Pitfall: it is a SHALLOW copy -> realCopy.genres.push("Horror") ALSO changes movie.genres
//     (nested arrays/objects are still shared)
// - Bonus: {} === {} is false (two different boxes)


// ------------------------------------------------------------
// STEP 12 (~4 min) - RECAP + EXERCISES
// ------------------------------------------------------------
// - Recap on the board:
//     { key: value }  |  dot vs [brackets]  |  add / update / delete
//     nesting: movie.cast[0].name  |  array of objects + for / forEach
//     for...in + Object.keys  |  methods + this (no arrows!)  |  reference vs { ...copy }
// - Open exercises.html + js/exercises.js and start with exercise 1
