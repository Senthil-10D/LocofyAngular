import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { OrderNo1 } from "../OrderNo1/OrderNo1.component";
@Component({
  selector: "collection-date",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [OrderNo1],
  templateUrl: "./CollectionDate.component.html",
  styleUrls: ["./CollectionDate.component.css"],
})
export class CollectionDate {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
