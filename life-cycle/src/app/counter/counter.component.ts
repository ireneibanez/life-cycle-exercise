import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  SimpleChanges
} from "@angular/core";
import { NgForOf } from '@angular/common';

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.scss"]
})
export class CounterComponent implements OnChanges, OnInit, OnDestroy {
  @Input() count;
  @Input() arrayNum;
  @Input() name;
  @Input() firstSurname;
  @Input() secondSurname;
  @Input() fullName;
  init: number = 0;
  ngOnChanges(changes: SimpleChanges) {
    console.log("Counter ngOnChange", changes);
  }

  ngOnInit() {
    console.log("Counter onInit");
    console.log(this.arrayNum);
    this.arrayNum.splice(0, 5);
    console.log(this.arrayNum);
    this.renderName(this.name, this.firstSurname, this.secondSurname);
  }

  renderName(name, firstSurname, secondSurname) {
    this.fullName = `${name} ${firstSurname} ${secondSurname}`;
  }

  // ngDoCheck() {
  //   console.log("Counter DoCheck");
  // }

  // ngAfterContentInit() {
  //   console.log("Counter AfterContentInit");
  // }

  // ngAfterContentChecked() {
  //   console.log("Counter AfterContentChecked");
  // }

  // ngAfterViewInit() {
  //   console.log("Counter AfterViewInit");
  // }

  // ngAfterViewChecked() {
  //   console.log("Counter AfterViewChecked");
  // }

  ngOnDestroy() {
    console.log("Counter onDestroy");
  }
}
