import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "../../providers/peliculas.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styles: []
})
export class MovieComponent implements OnInit {
  public pelicula: any;
  private id: string;
  private pagina: string;

  constructor(
    public peliculaService: PeliculasService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(params => {
      // recupero los paramtros de la url
      this.id = params["id"];
      this.pagina = params["pag"];
      this.peliculaService
        .getPelicula(this.id)
        .subscribe(movie => (this.pelicula = movie));
    });
  }

  ngOnInit() {}

  public regresar() {
    console.log("navigateTo: ", this.pagina);
    
    this.router.navigate(["/" + this.pagina]);
  }
}
