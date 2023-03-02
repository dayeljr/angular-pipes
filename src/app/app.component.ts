import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = 'JuNior QuIspe';
  value: number = 1000;
  obj: object = {
    name: 'Junior'
  }

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  showName(): void {
    console.log(this.name);
    console.log(this.value);
    console.log(this.obj);
  }
}
