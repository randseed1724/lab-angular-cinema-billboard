import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cinemaService } from '../cinema-service';



@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  lastMovies: Array<Object> = [];

  constructor(
      private router: Router,
      private myMovies: cinemaService,
  ) { }

  ngOnInit() {
    this.getmovies();
  }

  viewDetails(id) {
    this.router.navigate(['movie/:id', id]);
  }


  getmovies() {
    this.myMovies.getmovies()
      .then((moviesList) => {
          this.lastMovies = moviesList;
        })
      .catch((err) => {
        console.log('Fetch Characters error.');
        console.log(err);
      });
  }

}
