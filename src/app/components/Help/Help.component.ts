import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "help",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Help.component.html",
  styleUrls: ["./Help.component.css"],
})
export class Help {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
