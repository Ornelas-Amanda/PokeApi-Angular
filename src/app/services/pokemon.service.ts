import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  constructor(private httpClient: HttpClient) {
    this.list();
  }

  list() {
    return this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
  }
}