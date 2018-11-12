import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-galeria",
  templateUrl: "./galeria.component.html",
  styles: []
})
export class GaleriaComponent implements OnInit {
  @Input("titulo")
  public titulo:string;
  
  @Input("peliculas")
  public peliculas: any[];

  constructor() {}

  ngOnInit() {}
}
