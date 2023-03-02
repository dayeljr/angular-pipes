import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.scss'],
})
export class NoComunesComponent {
  // i18nSelect
  name: string = 'Junior';
  gender: string = 'masculino';
  invitation = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };
  //i18nPlural
  clients: string[] = ['María', 'Juan', 'Pedro'];
  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  changePerson() {
    this.name = 'Ximena';
    this.gender = 'femenino';
  }

  removeClient() {
    this.clients.pop();
  }

  // KeyValue Pipe
  person = {
    name: 'Fernando',
    age: 35,
    direction: 'Ottawa, Canadá'
  }

  // Json Pipe
  heroes = [
    {
      name: 'Superman',
      flying: true,
    },
    {
      name: 'Robin',
      flying: false,
    },
    {
      name: 'Acuaman',
      flying: false,
    },
  ];

  // Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa')
    }, 3500);
  });
}
