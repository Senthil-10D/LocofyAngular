import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: "group-component3",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./GroupComponent3.component.html",
  styleUrls: ["./GroupComponent3.component.css"],
})
export class GroupComponent3 {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() hospitalOrder: string = "";
  /** Variant props */
  @Input() property1: "Default" | "S2 Defalult" = "Default";
}
