import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class moviesService {
  id: number = 0000;
  title: string = Coming Soon;
  poster: string = Poster Available;
  synopsis: string = Movie Synopsis;
  Genres: Array<Objects>
  year: number = 0000;
  synopsis: string = Movie Synopsis;
  director: string = Petrigruv Lesmua;
  actors: Array<String>
  hours: Array<String>
  room: number = 1;



  constructor(private myHttp: Http) { }

 fetchCharacters() {
   return this.myHttp.get('https:/ih-api.herokuapp.com/characters')
   .toPromise()
   .then(myApiString => myApiString.json())
 }

 postCharacter(characterInfo) {
   const headers = new Headers({'Content-Type':'application/json'});
   const options = { headers: headers };

   return this.myHttp.post(
     'https://ih-api.herokuapp.com/characters',
     characterInfo,
     options
   )
   .toPromise()
   .then(myApiString => myApiString.json())
 }



}
