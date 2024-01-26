import { Component } from '@angular/core';
import { PokeapiService } from '../Services/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemonId: number = 0;
  pokemonName: string = "";
  pokemonResultById: any;
  pokemonResultByName: any;
  itemId: number = 0;
  itemName: string = "";
  itemResultById: any;
  itemResultByName: any;
  constructor(private api: PokeapiService) {}

  searchPokemonById() {
    if (this.pokemonId) {
      this.api.getPokemonID(this.pokemonId).subscribe(response => {
        this.pokemonResultById = response;
      }, error => {
        console.log(error);
      });
    }
  }

  searchPokemonByName() {
    if (this.pokemonName) {
      this.api.getPokemonName(this.pokemonName).subscribe(response => {
        this.pokemonResultByName = response;
      }, error => {
        console.log(error);
      });
    }
  }

  searchItemById() {
    if (this.itemId) {
      this.api.getItemID(this.itemId).subscribe(response => {
        this.itemResultById = response;
      }, error => {
        console.log(error);
      });
    }
  }

  searchItemByName() {
    if (this.itemName) {
      this.api.getItemName(this.itemName).subscribe(response => {
        this.itemResultByName = response;
      }, error => {
        console.log(error);
      });
    }
  }
}
