import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'movieDesc'
})
export class MovieDescPipe implements PipeTransform {
  transform(movieDesc: string): string {
    return movieDesc.split('.')[0];
  }
}
