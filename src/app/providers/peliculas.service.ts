import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Jsonp } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PeliculasService {
  private metodo: string = "JSONP"; //JSONP o HTTP
  private apiKey: string = "e6e40ec50350d64727ad55e1bc4cf246";
  private moviedbURL: string = "https://api.themoviedb.org/3";
  private imagesURL: string = "https://image.tmdb.org/t/p/w300";
  public peliculas: any[] = [];

  constructor(private http: HttpClient, private jsonp: Jsonp) {}

  public getPopulares() {
    let url: string = `${
      this.moviedbURL
    }/discover/movie?sort_by=popularity.desc&api_key=${
      this.apiKey
    }&language=es`;

    if (this.metodo === "JSONP") {
      return this.getPopularesJSONP(url);
    } else {
      return this.getPopularesHTTP(url);
    }
  }

  private getPopularesJSONP(url: string) {
    return this.jsonp
      .get(url + "&callback=JSONP_CALLBACK")
      .pipe(map((res: any) => res._body.results.slice(0, 6)));
  }

  private getPopularesHTTP(url: string) {
    return this.http.get(url);
  }

  public buscarPelicula(texto: string) {
    let url = `${
      this.moviedbURL
    }/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${
      this.apiKey
    }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).pipe(
      map((res: any) => {
        this.peliculas = res._body.results;
        return this.peliculas;
      })
    );
  }

  public getCartelera() {
    let fechaDesde: Date = new Date(); //2014-09-15
    let fechaHasta: Date = new Date(); //2014-09-15
    let url = `${
      this.moviedbURL
    }/discover/movie?primary_release_date.gte=${this.convert(
      fechaDesde
    )}&primary_release_date.lte=${this.convert(fechaHasta)}&api_key=${
      this.apiKey
    }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp
      .get(url)
      .pipe(map((res: any) => res._body.results.slice(0, 6)));
  }

  public getPopularesChicos() {
    let url = `${
      this.moviedbURL
    }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${
      this.apiKey
    }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp
      .get(url)
      .pipe(map((res: any) => res._body.results.slice(0, 6)));
  }

  public getPelicula(id: string) {
    let url = `${this.moviedbURL}/movie/${id}?api_key=${
      this.apiKey
    }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).pipe(map((res: any) => res._body));
  }

  private convert(fecha: Date): string {
    return `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`;
  }
}
