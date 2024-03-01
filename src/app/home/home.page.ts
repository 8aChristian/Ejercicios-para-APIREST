import { Component } from '@angular/core';
import { PokeapiService } from '../Services/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  searchTerm: string = "";
  pokemonResult: any;

  constructor(private api: PokeapiService) {}

  searchPokemon() {
    if (this.searchTerm) {
      // Verificar si el término es un número (ID) o una cadena (nombre)
      const searchTermNumber = parseInt(this.searchTerm, 10);
      
      if (!isNaN(searchTermNumber)) {
        // Buscar por ID
        this.api.getPokemonID(searchTermNumber).subscribe(response => {
          this.pokemonResult = response;
        }, error => {
          console.log(error);
        });
      } else {
        // Buscar por nombre
        this.api.getPokemonName(this.searchTerm).subscribe(response => {
          this.pokemonResult = response;
        }, error => {
          console.log(error);
        });
      }
    }
  }
}
