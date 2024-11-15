import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: "dash-btn",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./DashBtn.component.html",
  styleUrls: ["./DashBtn.component.css"],
})
export class DashBtn {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() hospitalOrder: string = "";
  @Input() group695: string = "";
  /** Variant props */
  @Input() property1: "Default" = "Default";
}
