import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import movieList from '../movieList';

@Injectable()
export class cinemaService {
  //Movies List
  movies: Object[];
  //Data from movies
  id: number = 0;
  title: string = "Coming Soon";
  poster: string = "Poster Available";
  synopsis: string = "Movie Synopsis";
  genres: Array<String>
  year: number = 2017;
  director: string = "Petrigruv Lesmua";
  actors: Array<String>
  hours: Array<String>
  room: number = 1;
  //Array of Movies
  getMovies: Object[];
  //Array of Movies IDs
  getMoviesIds: Object[];


  constructor() {
    this.movies = movieList;
  console.log('Get movies1', this.getmovies() );
  console.log('Movies', movieList)


  }

  ngOnInit() {
  }

   getmovies(): Array<Object> {
     return  this.movies;
   }

  //  getMovie(thisId: number): Object {
getMovie(thisId) {

     let eachId;

    movieList.forEach((oneMovie)=>{
      console.log("oneMovie: ", oneMovie.id );

           if(oneMovie.id == thisId){
             return eachId = oneMovie;
           }
           return eachId;
         })
           console.log(eachId)
       return eachId;
   }

    //  getMovie(id){
    //    this.movies.filter(x => x.id === id)
    //  }
}
