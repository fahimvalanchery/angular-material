import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomersListComponent } from "./customers-list/customers-list.component";
import { CustomersCardComponent } from "./customers-card/customers-card.component";

const routes: Routes = [
  {
    path: "",
    component: CustomersListComponent
  },
  {
    path: "info",
    component: CustomersCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {}
