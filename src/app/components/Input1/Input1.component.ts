import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
@Component({
  selector: "input1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./Input1.component.html",
  styleUrls: ["./Input1.component.css"],
})
export class Input1 {
  @HostBinding("style.display") display = "contents";

  constructor(private router: Router) {}

  /** Value props */
  @Input() placeholder: string = "";
  /** Style props */
  @Input() inputFlex: string | number = "";
  @Input() inputGap: string | number = "";
  @Input() inputWrapperMinWidth: string | number = "";
  /** Action props */
  @Input() onGroupClick: () => void = () => {};

  onGroupClick1() {
    this.router.navigate(["/new-specimen-registration"]);
  }
  get inputStyle() {
    return {
      flex: this.inputFlex,
      gap: this.inputGap,
    };
  }

  get inputWrapperStyle() {
    return {
      "min-width": this.inputWrapperMinWidth,
    };
  }
}
