import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Router } from "@angular/router";
import { Input1 } from "../Input1/Input1.component";
import { DashBtn } from "../DashBtn/DashBtn.component";
@Component({
  selector: "page-content",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [Input1, DashBtn],
  templateUrl: "./PageContent.component.html",
  styleUrls: ["./PageContent.component.css"],
})
export class PageContent {
  @HostBinding("style.display") display = "contents";

  constructor(private router: Router) {}

  onGroupClick() {
    this.router.navigate(["/new-specimen-registration"]);
  }
}
