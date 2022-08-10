import { Component, Input } from '@angular/core';
import { Pokemon } from '../model/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input()
  pokemon?: string;

  @Input()
  numero!: number;

  @Input()
  imageName!: string;

  

  pegarImagemPokemon() {
    const numeroFormatado = this.leadingZero(this.numero);

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`;
  }

  pokeID(){
    const numeroFormatado = this.leadingZero(this.numero);

    return  numeroFormatado;
  
  }

  favoritarPokemon( id : string, nome:string){
    
     let fav = String(id);
   
     sessionStorage.setItem('pokeFav', fav)
     sessionStorage.setItem('pokename', nome)
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }
}