const movieModel = require('../models/movies');

module.exports = {
 getById: function(req, res, next) {
  console.log(req.body);
  movieModel.findById(req.params.movieId, function(err, movieInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "Movie found!!!", data:{movies: movieInfo}});
   }
  });
 },

// TERMINAR

 getByGenre: function(req, res, next) {
  let moviesList = [];

  movieModel.find({released_on:req.body.genre}, function(err, movies){
     if (err){
      next(err);
     } else{
      for (let movie of movies) {
       moviesList.push({id: movie._id, name: movie.name, released_on: movie.released_on});
      }
      res.json({status:"success", message: "Movies list found!!!", data:{movies: moviesList}});
         
     }
  
  });
 },

getAll: function(req, res, next) {
  let moviesList = [];

movieModel.find({}, function(err, movies){
   if (err){
    next(err);
   } else{
    for (let movie of movies) {
     moviesList.push({id: movie._id, name: movie.name, released_on: movie.released_on});
    }
    res.json({status:"success", message: "Movies list found!!!", data:{movies: moviesList}});
       
   }

});
 },

 // Terminar db.movies.find({released_on:{$lt:"2018-08-10",$gt:"2017-12-17"}}).pretty()

 getAllBetweenDate: function(req, res, next) {
  let moviesList = [];

  movieModel.find(req.params.date1, function(err, movies){
    if (err){
      next(err);
    } else{
      for (let movie of movies) {
      moviesList.push({id: movie._id, name: movie.name, released_on: movie.released_on});
      }
      res.json({status:"success", message: "Movies list found!!!", data:{movies: moviesList}});
        
    }

  });
 },

 
updateById: function(req, res, next) {
  movieModel.findByIdAndUpdate(req.params.movieId,{name:req.body.name}, function(err, movieInfo){

if(err)
    next(err);
   else {
    res.json({status:"success", message: "Movie updated successfully!!!", data:null});
   }
  });
 },

deleteById: function(req, res, next) {
  movieModel.findByIdAndRemove(req.params.movieId, function(err, movieInfo){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "Movie deleted successfully!!!", data:null});
   }
  });
 },

create: function(req, res, next) {
  movieModel.create({ name: req.body.name, released_on: req.body.released_on }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "Movie added successfully!!!", data: null});
      
    });
 },

}