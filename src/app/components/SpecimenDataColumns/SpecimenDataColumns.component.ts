import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { OrderNo } from "../OrderNo/OrderNo.component";
@Component({
  selector: "specimen-data-columns",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [OrderNo],
  templateUrl: "./SpecimenDataColumns.component.html",
  styleUrls: ["./SpecimenDataColumns.component.css"],
})
export class SpecimenDataColumns {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
