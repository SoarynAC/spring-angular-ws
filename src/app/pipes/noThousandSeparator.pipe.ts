import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noThousandSeparator'
})
export class NoThousandSeparatorPipe implements PipeTransform {

  transform(val: number): string {
    if (val !== undefined && val !== null) {
      return val.toString().replace(/[.,]/g, '');
    } else {
      return '';
    }
  }
}
