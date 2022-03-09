import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureTest',
  pure: true
})
export class ImpureTestPipe implements PipeTransform {

  transform(arr: any[], prop: string): any[] {
    console.log('Hola');
    arr.sort((a: any, b: any) => {
      if (a[prop] > b[prop])
      {
        return -1;
      }
      else if (a[prop] < b[prop]){
        return 1;
      }
      else {
        return 0;
      }
    });
    return arr;
  }

}
