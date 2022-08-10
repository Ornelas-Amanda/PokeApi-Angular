import { Component} from '@angular/core';

@Component({
  selector: 'app-pokemon-fav',
  templateUrl: './pokemon-fav.component.html',
  styleUrls: ['./pokemon-fav.component.css']
})
export class PokemonFavComponent  {

   imageName!: string;

   sessaoSalva(){
    let conteudo = String(sessionStorage.getItem('pokeFav')) 

    if(conteudo == 'undefined' || conteudo == 'null'){
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png`;
  
    }
    else{
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${conteudo}.png`;
  
    }
   
    
   }

   mudandoFrase(){
    let conteudo = String(sessionStorage.getItem('pokeFav')) 
    let nome = String(sessionStorage.getItem('pokename'));
    if(conteudo == 'undefined' || conteudo == 'null'){
      return 'Escolha seu pokemon favorito!!'
    }
    else{
      return nome+ "!! Eu escolho você"
    }
   }
}
