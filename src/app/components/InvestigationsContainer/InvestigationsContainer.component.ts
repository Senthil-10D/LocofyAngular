import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Investigations } from "../Investigations/Investigations.component";
@Component({
  selector: "investigations-container",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [Investigations],
  templateUrl: "./InvestigationsContainer.component.html",
  styleUrls: ["./InvestigationsContainer.component.css"],
})
export class InvestigationsContainer {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
