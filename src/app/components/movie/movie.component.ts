import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "../../providers/peliculas.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styles: []
})
export class MovieComponent implements OnInit {
  public pelicula: any;

  constructor(
    public peliculaService: PeliculasService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      // recupero los paramtros de la url
      let id:string = params["id"];
      let pagina:string = params["pag"];
      this.peliculaService.getPelicula(id).subscribe(movie => this.pelicula = movie);
    });
  }

  ngOnInit() {}
}
