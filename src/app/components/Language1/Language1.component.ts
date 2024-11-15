import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "language1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./Language1.component.html",
  styleUrls: ["./Language1.component.css"],
})
export class Language1 {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Variant props */
  @Input() property1: "Default" = "Default";
  /** Style props */
  @Input() loginTextDecoration: string | number = "";

  get login3Style() {
    return {
      "text-decoration": this.loginTextDecoration,
    };
  }
}
