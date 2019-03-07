import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: []
})
export class AppComponent {
  num: number = 0;
  showCounter: boolean = true;

  increment() {
    this.num++;
  }
}
