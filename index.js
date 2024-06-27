const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
.then(() => {
    console.log("connection open")
})
.catch(err => {
    console.log("error", err)
})

// const kittySchema = new mongoose.Schema({
//     name: String
//   });

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema);
const amadeus = new Movie({ title: 'Amadeus', year: 1986, score:9.2, rating: 'R'})
