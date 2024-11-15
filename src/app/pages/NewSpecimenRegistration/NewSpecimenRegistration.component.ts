import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { MainLogo } from "../../components/MainLogo/MainLogo.component";
import { HeaderLeft } from "../../components/HeaderLeft/HeaderLeft.component";
import { FrameComponent } from "../../components/FrameComponent/FrameComponent.component";
import { GroupComponent4 } from "../../components/GroupComponent4/GroupComponent4.component";
import { SpecimenDetailsV } from "../../components/SpecimenDetailsV/SpecimenDetailsV.component";
import { InvestigationsContainer } from "../../components/InvestigationsContainer/InvestigationsContainer.component";
import { GroupComponent5 } from "../../components/GroupComponent5/GroupComponent5.component";
@Component({
  selector: "new-specimen-registration",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    MainLogo,
    HeaderLeft,
    FrameComponent,
    GroupComponent4,
    SpecimenDetailsV,
    InvestigationsContainer,
    GroupComponent5,
  ],
  templateUrl: "./NewSpecimenRegistration.component.html",
  styleUrls: ["./NewSpecimenRegistration.component.css"],
})
export class NewSpecimenRegistration {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
