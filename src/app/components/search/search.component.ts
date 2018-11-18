import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  public buscar:string = "";

  constructor(public peliculaService:PeliculasService, private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe (params => {
      if(params["text"]) {
        this.buscar = params["text"];
        this.buscarPelicula();
      }
      
    });
  }


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
