import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "profile",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./Profile.component.html",
  styleUrls: ["./Profile.component.css"],
})
export class Profile {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Variant props */
  @Input() property1: "Default" = "Default";
  /** Style props */
  @Input() loginTextDecoration: string | number = "";
  @Input() jTextDecoration: string | number = "";

  get login4Style() {
    return {
      "text-decoration": this.loginTextDecoration,
    };
  }

  get jStyle() {
    return {
      "text-decoration": this.jTextDecoration,
    };
  }
}
