import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "../../providers/peliculas.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {
  public cartelera: any[];
  public populares: any[];
  public popularesChicos: any[];

  constructor(private peliculasService: PeliculasService) {
    peliculasService.getPopulares().subscribe(data => (this.populares = data));

    peliculasService.getCartelera().subscribe(data => (this.cartelera = data));
    peliculasService
      .getPopularesChicos()
      .subscribe(data => (this.popularesChicos = data));
  }

  ngOnInit() {}
}
