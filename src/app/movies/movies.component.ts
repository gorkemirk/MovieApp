import { Component } from "@angular/core";

@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html',
})


export class MoviesComponent{
movies = ['The Matrix', 'The Matrix Reloaded', 'The Matrix Revolutions'];
   
}