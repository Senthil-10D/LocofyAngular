import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: "language",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Language.component.html",
  styleUrls: ["./Language.component.css"],
})
export class Language {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Variant props */
  @Input() property1: "Default" = "Default";
}
