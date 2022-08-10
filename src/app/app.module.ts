import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonService } from './services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { PokemonFavComponent } from './pokemon-fav/pokemon-fav.component';

@NgModule({
  declarations: [AppComponent, PokemonCardComponent, PokemonListComponent, PokemonFavComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent],
})
export class AppModule {  }
