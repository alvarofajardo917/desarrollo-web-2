//cuarta modificacion
import { Component } from '@angular/core';
//novena modificacion
//import { Hero } from '../hero';
//importacion de la lista de heroes
import {HEROES} from '../heroes-list';
//importacion de las herramientas que se va utilizar
import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Hero} from '../hero';
@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
  ],
})
export class HeroesComponent {
  //quinta modificacion
  //hero = 'Windstorm';
  //novena modificacion
  heroes = HEROES;
  /*hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };*/
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}