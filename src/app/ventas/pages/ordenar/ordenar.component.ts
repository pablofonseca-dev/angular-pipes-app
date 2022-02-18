import { Component, OnInit } from '@angular/core';
import { Color, IHeroe } from '../../interfaces/ventas.interfaces';
import { HeroePropType, SortingPropType } from '../../pipes/ordena/ordenaHeroes.pipe';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  palabra: string = 'nosotros';

  sortBy: SortingPropType = 'none';

  heroes: IHeroe[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.azul,
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.negro,
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.verde,
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.rojo,
    },
    {
      name: 'Linterna Verde',
      fly: true,
      color: Color.verde,
    },
  ];

  isMayuscula: boolean = false;

  toggleMayusculas: Function = () => {
    this.isMayuscula = !this.isMayuscula;
  };

  changeSort(value: SortingPropType){
    if(value == this.sortBy){
      this.sortBy = 'none';
    }
    else {
      this.sortBy = value; 
    }
  }
}
