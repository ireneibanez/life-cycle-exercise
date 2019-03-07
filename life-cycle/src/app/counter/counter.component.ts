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

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.scss"]
})
export class CounterComponent implements OnChanges, OnInit, OnDestroy {
  @Input() count;
  init: number = 0;
  ngOnChanges(changes: SimpleChanges) {
    console.log("Counter ngOnChange", changes);
  }

  ngOnInit() {
    console.log("Counter onInit");
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
