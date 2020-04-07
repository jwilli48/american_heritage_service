import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  focused: string;

  constructor() {}

  ngOnInit() {}

  setFocus(name: string) {
    this.focused = name;
  }

  removeFocus() {
    this.focused = "";
  }
}
