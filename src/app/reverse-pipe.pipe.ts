import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversePipe'
})
export class ReversePipePipe implements PipeTransform {
  reverseValue: string = '';
  transform(value: string, ...args: any[]): string {
    this.reverseValue = value.split('').reverse().join('');
    return this.reverseValue;
  }

}
