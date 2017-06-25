import { Injectable } from '@angular/core';
import movieList from '../movieList';

// import { Http, Headers } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class moviesService {
  movies: : Object[];
  id: number = 0;
  title: string = Coming Soon;
  poster: string = Poster Available;
  synopsis: string = Movie Synopsis;
  genres: Array<Strings>
  year: number = 2017;
  director: string = Petrigruv Lesmua;
  actors: Array<Strings>
  hours: Array<Strings>
  room: number = 1;

  constructor() {}

  ngOnInit() {
    this.movies = movieList;
  }

   getmovies()

   getMovie(id)

}
