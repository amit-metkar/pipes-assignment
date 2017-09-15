export class Server {
  constructor(private instanceType: string, name: string, status: string, started: Date) {}
}


import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any): any {
    if (value.length === 0) {
      return value;
    }
    ( < Array < Server > > value).sort(() => {
      return name;
    });
  }

}
