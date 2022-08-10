import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit{
  pokemons:Pokemon[]=[]

  constructor(public pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.listarPokemons()
  }

  listarPokemons(){
    this.pokemonService.list().subscribe(
      ((res) => this.pokemons = res.results),
      ((err) => console.log(err))
    )
  }

}

