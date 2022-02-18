import { Pipe, PipeTransform } from '@angular/core';
import { IHeroe } from '../../interfaces/ventas.interfaces';

export type HeroePropType = 'name' | 'fly' | 'color';
export type SortingPropType = HeroePropType | 'none';

@Pipe({
  name: 'ordenaHeroes',
})
export class OrdenaHeroesPipe implements PipeTransform {
  transform(value: IHeroe[], orderBy: SortingPropType): IHeroe[] {
    const genericHeroeSort = (heroeProp: HeroePropType): IHeroe[] => {
      let sortedArr = [...value];
      sortedArr = sortedArr.sort((a: IHeroe, b: IHeroe) => {
        return a[heroeProp] > b[heroeProp] ? 1 : a[heroeProp] < b[heroeProp] ? -1 : 0
      });

      return sortedArr; 
    }
    const orderByName = () => genericHeroeSort('name');
    const orderByFly = () => genericHeroeSort('fly');
    const orderByColor = () => genericHeroeSort('color');

    switch(orderBy){
      case 'color': 
        return orderByColor();
      case 'fly': 
        return orderByFly();
      case 'name': 
        return orderByName();
      case 'none': 
        return value;
    }
  }
}
