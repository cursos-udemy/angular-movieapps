import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  //@Input()
  public buscar:string = "";

  constructor(public peliculaService:PeliculasService) { }

  ngOnInit() {
  }

  public buscarPelicula () {
    // valido que haya ingresado algo a buscar
    if (this.buscar.length == 0) {
      return;
    }
    this.peliculaService.buscarPelicula(this.buscar).subscribe(data => {
      console.log(data);
    });
  }

}
