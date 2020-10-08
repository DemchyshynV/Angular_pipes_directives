import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'adder'
})
export class AdderPipe implements PipeTransform {

  transform(value: IUser[], start: string, end: string, ...args: string[]): string {
    const res = start + value + end;
    return res;
  }

}
