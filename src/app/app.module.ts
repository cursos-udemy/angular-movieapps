import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { JsonpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app.routes";

//COMPONENTS
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { MovieComponent } from "./components/movie/movie.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SearchComponent } from "./components/search/search.component";

//PIPES
import { MovieImagePipe } from "./pipes/movie-image.pipe";

// PROVIDERS
import { PeliculasService } from "./providers/peliculas.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    MovieComponent,
    MovieImagePipe
  ],
  imports: [BrowserModule, HttpClientModule, JsonpModule, AppRoutingModule],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
