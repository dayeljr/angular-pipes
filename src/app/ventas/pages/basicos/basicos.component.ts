import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent {
  nameLower: string = 'junior';
  nameUpper: string = 'JUNIOR';
  fullName: string = 'jUnIoR QuIsPe';
  date: Date = new Date(); // el día de hoy
}
