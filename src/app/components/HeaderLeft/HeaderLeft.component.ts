import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { GroupComponent } from "../GroupComponent/GroupComponent.component";
import { GroupComponent1 } from "../GroupComponent1/GroupComponent1.component";
import { GroupComponent2 } from "../GroupComponent2/GroupComponent2.component";
import { HeaderRight } from "../HeaderRight/HeaderRight.component";
@Component({
  selector: "header-left",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [GroupComponent, GroupComponent1, GroupComponent2, HeaderRight],
  templateUrl: "./HeaderLeft.component.html",
  styleUrls: ["./HeaderLeft.component.css"],
})
export class HeaderLeft {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
