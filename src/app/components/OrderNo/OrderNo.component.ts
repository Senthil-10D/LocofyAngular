import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "order-no",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./OrderNo.component.html",
  styleUrls: ["./OrderNo.component.css"],
})
export class OrderNo {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
