import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { GroupComponent3 } from "../GroupComponent3/GroupComponent3.component";
@Component({
  selector: "group-component5",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [GroupComponent3],
  templateUrl: "./GroupComponent5.component.html",
  styleUrls: ["./GroupComponent5.component.css"],
})
export class GroupComponent5 {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
