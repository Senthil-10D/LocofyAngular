import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Router } from "@angular/router";
@Component({
  selector: "main-logo",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./MainLogo.component.html",
  styleUrls: ["./MainLogo.component.css"],
})
export class MainLogo {
  @HostBinding("style.display") display = "contents";

  constructor(private router: Router) {}

  onMainLogoClick() {
    this.router.navigate(["/login"]);
  }
}
