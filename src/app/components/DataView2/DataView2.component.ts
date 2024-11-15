import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: "data-view2",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./DataView2.component.html",
  styleUrls: ["./DataView2.component.css"],
})
export class DataView2 {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Variant props */
  @Input() property1: "Head" = "Gray";
}
