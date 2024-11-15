import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { MainLogo } from "../../components/MainLogo/MainLogo.component";
import { HeaderLeft } from "../../components/HeaderLeft/HeaderLeft.component";
import { PageContent } from "../../components/PageContent/PageContent.component";
@Component({
  selector: "registration",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [MainLogo, HeaderLeft, PageContent],
  templateUrl: "./Registration.component.html",
  styleUrls: ["./Registration.component.css"],
})
export class Registration {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
