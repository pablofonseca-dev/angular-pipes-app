import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {
  transform(
    value: string,
    isUppercase: boolean = true,
    format: string = 'default'
  ): string {
    let val: string = value;

    val = isUppercase ? val.toUpperCase() : val;
    val = format === 'separated' ? this.getSeparated(val) : val;

    return val;
  }

  getSeparated: Function = (value: string): string => value.split('').join(' ');
}
