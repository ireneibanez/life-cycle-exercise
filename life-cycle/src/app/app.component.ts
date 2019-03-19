import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: []
})
export class AppComponent {
  name: string = 'Irene';
  firstSurname: string = 'Ibáñez';
  secondSurname : string = 'Martínez';
  fullName: string;
  num: number = 0;
  showCounter: boolean = true;
  arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  increment() {
    this.num++;
  }
}
