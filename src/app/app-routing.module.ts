import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Registration } from "./pages/Registration/Registration.component";
import { Login } from "./pages/Login/Login.component";
import { NewSpecimenRegistration } from "./pages/NewSpecimenRegistration/NewSpecimenRegistration.component";
const routes: Routes = [
  {
    path: "",
    component: Registration,
  },
  {
    path: "login",
    component: Login,
  },
  {
    path: "new-specimen-registration",
    component: NewSpecimenRegistration,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
