import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "check-box",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./CheckBox.component.html",
  styleUrls: ["./CheckBox.component.css"],
})
export class CheckBox {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Variant props */
  @Input() property1: "Default" | "Unchkable Empty" = "Default";
  /** Style props */
  @Input() checkBoxHeight: string | number = "";
  @Input() checkBoxWidth: string | number = "";
  @Input() checkBoxPosition: string | number = "";
  @Input() checkBoxTop: string | number = "";
  @Input() checkBoxLeft: string | number = "";

  get checkBoxStyle() {
    return {
      height: this.checkBoxHeight,
      width: this.checkBoxWidth,
      position: this.checkBoxPosition,
      top: this.checkBoxTop,
      left: this.checkBoxLeft,
    };
  }
}
