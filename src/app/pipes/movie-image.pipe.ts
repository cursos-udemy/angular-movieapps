import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "movieImage"
})
export class MovieImagePipe implements PipeTransform {
  transform(movie: any, poster:boolean = false): any {
    let url = "https://image.tmdb.org/t/p/w500";

    if (poster ) {
      return url + movie.poster_path;
    }

    if (movie.poster_path) {
      return url + movie.poster_path;
    } else if (movie.backdrop_path) {
      return url + movie.backdrop_path;
    } else {
      return "assets/images/noimage.jpg";
    }
  }
}
