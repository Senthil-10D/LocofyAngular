import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "group-component1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./GroupComponent1.component.html",
  styleUrls: ["./GroupComponent1.component.css"],
})
export class GroupComponent1 {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Variant props */
  @Input() property1: "Default" = "Default";
  /** Style props */
  @Input() loginTextDecoration: string | number = "";

  get login1Style() {
    return {
      "text-decoration": this.loginTextDecoration,
    };
  }
}
