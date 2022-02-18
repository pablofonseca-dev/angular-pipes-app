import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  nombreLower: string = 'pablo';
  nombreUpper: string = 'PABLO';
  nombreCompleto: string = 'pAbLo fONSecA';

  fecha: Date = new Date(); // el día de hoy.
  
}
