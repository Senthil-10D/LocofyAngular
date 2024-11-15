import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Help } from "../../components/Help/Help.component";
import { Language } from "../../components/Language/Language.component";
import { Buttons } from "../../components/Buttons/Buttons.component";
@Component({
  selector: "login",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [Help, Language, Buttons],
  templateUrl: "./Login.component.html",
  styleUrls: ["./Login.component.css"],
})
export class Login {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
