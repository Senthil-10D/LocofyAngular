import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "order-no1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./OrderNo1.component.html",
  styleUrls: ["./OrderNo1.component.css"],
})
export class OrderNo1 {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() collectionDate: string = "";
  /** Style props */
  @Input() registeredDateWidth: string | number = "";
  @Input() collectionDateWidth: string | number = "";

  get registeredDateStyle() {
    return {
      width: this.registeredDateWidth,
    };
  }

  get collectionDateStyle() {
    return {
      width: this.collectionDateWidth,
    };
  }
}
