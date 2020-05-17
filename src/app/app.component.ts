import { Component,OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pockemons';

@Component({
  selector: 'pokemon-app',
  templateUrl: `./app/app.component.html`,
})
export class AppComponent implements OnInit { 
  
  private title: string ="Pokémons";
  private pokemons: Pokemon[]; 

  ngOnInit()
  {
    this.pokemons=POKEMONS;
  }
  selectPokemon(pokemon: Pokemon)
  {
    alert("Vous avez cliqué sur" +pokemon.name)
  }
}