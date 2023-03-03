import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  transform(heroes: Hero[], orderFor: string = 'sin valor'): Hero[] {
    switch (orderFor) {
      case 'nombre':
        return (heroes = heroes.sort((a, b) => (a.name > b.name ? 1 : -1)));
      case 'vuela':
        return (heroes = heroes.sort((a, b) => (a.flying > b.flying ? -1 : 1)));
      case 'color':
        return (heroes = heroes.sort((a, b) => (a.color > b.color ? 1 : -1)));
      default:
        return heroes;
    }
  }
}
