import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "table-itemes",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./TableItemes.component.html",
  styleUrls: ["./TableItemes.component.css"],
})
export class TableItemes {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() tableText: string = "";
  /** Variant props */
  @Input() property1: "Head" = "Gray";
  /** Style props */
  @Input() tableItemesWidth: string | number = "";
  @Input() tableItemesGap: string | number = "";
  @Input() tableTextWidth: string | number = "";

  get tableItemesStyle() {
    return {
      width: this.tableItemesWidth,
      gap: this.tableItemesGap,
    };
  }

  get tableTextStyle() {
    return {
      width: this.tableTextWidth,
    };
  }
}
