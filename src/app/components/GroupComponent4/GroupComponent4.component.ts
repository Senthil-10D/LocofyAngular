import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "group-component4",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./GroupComponent4.component.html",
  styleUrls: ["./GroupComponent4.component.css"],
})
export class GroupComponent4 {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
