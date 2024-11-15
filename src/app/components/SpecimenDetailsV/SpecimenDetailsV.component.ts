import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { TapsButten } from "../TapsButten/TapsButten.component";
import { SpecimenDataColumns } from "../SpecimenDataColumns/SpecimenDataColumns.component";
import { CollectionDate } from "../CollectionDate/CollectionDate.component";
@Component({
  selector: "specimen-details-v",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [TapsButten, SpecimenDataColumns, CollectionDate],
  templateUrl: "./SpecimenDetailsV.component.html",
  styleUrls: ["./SpecimenDetailsV.component.css"],
})
export class SpecimenDetailsV {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Variant props */
  @Input() property1: "Specimen Details" = "Specimen Details";
}
