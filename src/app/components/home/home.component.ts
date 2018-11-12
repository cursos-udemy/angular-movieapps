import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "../../providers/peliculas.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {
  public cartelera: any[];

  constructor(private peliculasService: PeliculasService) {
    peliculasService.getPopulares().subscribe(data => console.log("populares",data));
    peliculasService.getCartelera().subscribe(data => {
      this.cartelera = data;
      console.log("cartelera:" ,this.cartelera);
    });
  }

  ngOnInit() {}
}
