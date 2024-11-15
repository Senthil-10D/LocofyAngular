import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { CheckBox } from "../CheckBox/CheckBox.component";
@Component({
  selector: "frame-component",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CheckBox],
  templateUrl: "./FrameComponent.component.html",
  styleUrls: ["./FrameComponent.component.css"],
})
export class FrameComponent {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
