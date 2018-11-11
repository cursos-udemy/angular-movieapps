import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private peliculasService: PeliculasService) {
    peliculasService.getPopulares().subscribe(data => console.log(data));
    peliculasService.getCartelera().subscribe(data => console.log(data));
  }

  ngOnInit() {
  }

}
