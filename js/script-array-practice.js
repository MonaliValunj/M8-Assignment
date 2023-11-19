//STEP 1
// let FavMovies = ["A Beautiful Mind", "Interstellar","The Post","The Pianist",
// "First to the Moon"];
// console.log(FavMovies[1]);

//STEP 2
// let movies = Array(5)
// movies[0] = "A Beautiful Mind"
// movies[1] = "Interstellar"
// movies[2] = "The Post"
// movies[3] = "The Pianist"
// movies[4] = "Celine"
// console.log(movies[0])

//STEP 3
// let movies = Array(5)
// movies[0] = "A Beautiful Mind"
// movies[1] = "Interstellar"
// movies[2] = "The Post"
// movies[3] = "The Pianist"
// movies[4] = "Celine"

// movies.splice(2,0,"Lion")
// console.log(movies.length)


//STEP 4
// let movies = []
// movies[0] = "A Beautiful Mind"
// movies[1] = "Interstellar"
// movies[2] = "The Post"
// movies[3] = "The Pianist"
// movies[4] = "Celine"

// movies.shift()
// console.log(movies)


//STEP 5
// let movies = []
// movies[0] = "A Beautiful Mind"
// movies[1] = "Interstellar"
// movies[2] = "The Post"
// movies[3] = "The Pianist"
// movies[4] = "Lion"
// movies[5] = "Celine"
// movies[6] = "Good Night Oppy"

// for (let i in movies) {
// 	console.log(movies[i]);
// }

//STEP 6
// let movies = []
// movies[0] = "A Beautiful Mind"
// movies[1] = "Interstellar"
// movies[2] = "The Post"
// movies[3] = "The Pianist"
// movies[4] = "Lion"
// movies[5] = "Celine"
// movies[6] = "Good Night Oppy"

// for (let i of movies) {
// 	console.log(i);
// }

//STEP 7
// let movies = []
// movies[0] = "A Beautiful Mind"
// movies[1] = "Interstellar"
// movies[2] = "The Post"
// movies[3] = "The Pianist"
// movies[4] = "Lion"
// movies[5] = "Celine"
// movies[6] = "Good Night Oppy"

// movies.sort() 

// for (let i of movies) {
// 	console.log(i);
// }


//STEP 8
// let movies = []
// movies[0] = "A Beautiful Mind"
// movies[1] = "Interstellar"
// movies[2] = "The Post"
// movies[3] = "The Pianist"
// movies[4] = "Lion"
// movies[5] = "Celine"
// movies[6] = "Good Night Oppy"

// let leastFavMovies = ["Drishaym2","Crazy Rich Asians","All Good Things"]

// console.log("Movies I liked: \n\n")
// for(var i = 0; i < movies.length; i++){
//      console.log(movies[i]+" \n")
// }

// console.log("\n\nMovies I regret watching: \n\n")
// for(var i = 0; i < leastFavMovies.length; i++){
//      console.log(leastFavMovies[i]+" \n")
// }

//STEP 9
// let movies = []
// movies[0] = "A Beautiful Mind"
// movies[1] = "Interstellar"
// movies[2] = "The Post"
// movies[3] = "The Pianist"
// movies[4] = "Lion"
// movies[5] = "Celine"
// movies[6] = "Good Night Oppy"

// let leastFavMovies = ["Drishaym2","Crazy Rich Asians","All Good Things"]
// movies = movies.concat(leastFavMovies)
// console.log(movies.sort().reverse())
// for (let i of movies){
//     console.log(i)
// } 


//STEP 10

// let movies = []
// movies[0] = "A Beautiful Mind"
// movies[1] = "Interstellar"
// movies[2] = "The Post"
// movies[3] = "The Pianist"
// movies[4] = "Lion"
// movies[5] = "Celine"
// movies[6] = "Good Night Oppy"

// let leastFavMovies = ["Drishaym2","Crazy Rich Asians","All Good Things"]
// movies = movies.concat(leastFavMovies)
// movies.sort().reverse()
// console.log("Last item is: "+movies.slice(-1))


//STEP 11

// let movies = []
// movies[0] = "A Beautiful Mind"
// movies[1] = "Interstellar"
// movies[2] = "The Post"
// movies[3] = "The Pianist"
// movies[4] = "Lion"
// movies[5] = "Celine"
// movies[6] = "Good Night Oppy"

// let leastFavMovies = ["Drishaym2","Crazy Rich Asians","All Good Things"]
// movies = movies.concat(leastFavMovies)
// movies.sort().reverse()
// console.log("first item is: "+movies.shift())


//STEP 12
//  let FavMovies = ["A Beautiful Mind", "Interstellar","The Post","The Pianist","Drishaym2","Crazy Rich Asians","All Good Things"]
//  let leastFavMovies = ["Drishaym2","Crazy Rich Asians","All Good Things"]

//STEP 13
// let movies = [["A Beautiful Mind", 1], ["Interstellar", 2], ["The Post", 3], ["The Pianist", 4], ["Drishaym2", 5]];

// const movieNames = [];

// for (let i = 0; i < movies.length; i++) {
//     if (typeof movies[i][0] === 'string') {
//         movieNames.push(movies[i][0]);
//     }
// }
// movieNames.forEach(m => {
//     console.log(m);
// });


//STEP 14
// let employees = ["MONALI", "JOHN", "JESSICA", "MARK","FRED","SALLY"]
// let showEmployee = function(arr){
//      console.log("Employees: \n\n")
//      arr.forEach((element) => console.log(element))
// }
// showEmployee(employees)


//STEP 15
// var arr =[58, '', 'abcd', true, null, false, 0]
// function filterArray(elm){
//      return (elm != null && elm !== false && elm !== "" && elm !== 0);
//  }
// console.log(arr.filter(filterArray));

//STEP 16
// var arr = [2,4,5,76,8,9,0,22,34,54,12,45]

// function randomNum(arr){
//      return arr[Math.floor(Math.random()*arr.length)]
// }
// console.log(randomNum(arr))

//STEP 17

// var arr = arr = [2, 4, 5, 76, 8, 9, 0, 22, 34, 54, 12, 45]
// var largest = 0;

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] > largest ) {
//     largest = arr[i];
//   }
// }
// console.log(largest);