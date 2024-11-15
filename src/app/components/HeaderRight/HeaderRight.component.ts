import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Language1 } from "../Language1/Language1.component";
import { Profile } from "../Profile/Profile.component";
@Component({
  selector: "header-right",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [Language1, Profile],
  templateUrl: "./HeaderRight.component.html",
  styleUrls: ["./HeaderRight.component.css"],
})
export class HeaderRight {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
