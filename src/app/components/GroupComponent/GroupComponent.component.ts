import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "group-component",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./GroupComponent.component.html",
  styleUrls: ["./GroupComponent.component.css"],
})
export class GroupComponent {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Variant props */
  @Input() property1: "Default" = "Default";
  /** Style props */
  @Input() loginTextDecoration: string | number = "";

  get loginStyle() {
    return {
      "text-decoration": this.loginTextDecoration,
    };
  }
}
