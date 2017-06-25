import { Injectable } from '@angular/core';
import movieList from '../movieList';

// import { Http, Headers } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class moviesService {
  movies: Object[];
  getMovies: Object[];
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

  constructor() {}

  ngOnInit() {
    this.movies = movieList;
  }

   getmovies() {
     this.movies.unshift(this.getMovies);
   }

   getMovie(id) {
     this.id.push(this.getMovies);
   }

}
