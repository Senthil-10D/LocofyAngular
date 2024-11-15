import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: "buttons",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Buttons.component.html",
  styleUrls: ["./Buttons.component.css"],
})
export class Buttons {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() login: string = "";
  /** Variant props */
  @Input() property1: "Default" | "B2" = "Default";
}
