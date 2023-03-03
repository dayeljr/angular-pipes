import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.scss']
})
export class OrdenarComponent {
  inUpperCase: boolean = true;
  orderFor: string = '';
  heroes: Hero[] = [
    {
      name: 'Superman',
      flying: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      flying: false,
      color: Color.black,
    },
    {
      name: 'Robin',
      flying: false,
      color: Color.green,
    },
    {
      name: 'Daredevil',
      flying: false,
      color: Color.red,
    },
    {
      name: 'Linterna verde',
      flying: false,
      color: Color.green,
    },
  ];

  changeLetter() {
    this.inUpperCase = !this.inUpperCase;
  }

  changeOrder(valor: string) {
    this.orderFor = valor;
  }
}
