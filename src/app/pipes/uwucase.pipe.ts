import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uwucase'
})
export class UwucasePipe implements PipeTransform {

  transform(value: string, uppercase: boolean = false): string {
    if (uppercase){
      return value.replace(/[uU]/g,"UWU");
    }
    else{
      return value.replace(/[uU]/g,"uwu");
    }
  }

}
