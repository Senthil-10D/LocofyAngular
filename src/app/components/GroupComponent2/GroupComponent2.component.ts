import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "group-component2",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./GroupComponent2.component.html",
  styleUrls: ["./GroupComponent2.component.css"],
})
export class GroupComponent2 {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Variant props */
  @Input() property1: "Default" = "Default";
  /** Style props */
  @Input() loginTextDecoration: string | number = "";

  get login2Style() {
    return {
      "text-decoration": this.loginTextDecoration,
    };
  }
}
