import { Component, OnInit } from '@angular/core';
import { interval, Observable, TimeInterval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  // i18nSelect
  nombre: string = 'Fernando';
  genero: string = 'masculino';
  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
    other: 'other',
  };

  // i18nPlural
  clientes: string[] = ['María', 'Jose', 'John', 'Sam'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  cambiarPersona = () => {
    this.nombre = 'Diana';
    this.genero = 'femenino';
  };

  borrarCliente = () => {
    if (this.clientes.length > 0) {
      this.clientes.splice(this.clientes.length - 1, 1);
    }
  };

  // keyValue Pipe
  persona = {
    nombre: 'Pablo',
    edad: 20,
    direccion: 'Alajuela, Atenas',
  };

  // JsonPipe

  heroes: Object = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  //Async Pipe
  miObservable: Observable<number> = interval(1000);

  miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve('Datos obtenidos de la promesa');
    }, 3000);
  });
}
