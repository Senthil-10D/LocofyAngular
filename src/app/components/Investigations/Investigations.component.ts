import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CheckBox } from "../CheckBox/CheckBox.component";
import { TableItemes } from "../TableItemes/TableItemes.component";
import { DataView1 } from "../DataView1/DataView1.component";
import { DataView2 } from "../DataView2/DataView2.component";
@Component({
  selector: "investigations",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CheckBox, TableItemes, DataView1, DataView2],
  templateUrl: "./Investigations.component.html",
  styleUrls: ["./Investigations.component.css"],
})
export class Investigations {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Variant props */
  @Input() property1: "Default" = "Default";
}
