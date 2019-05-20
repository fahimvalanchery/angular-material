import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomersRoutingModule } from "./customers-routing.module";
import { CustomersListComponent } from "./customers-list/customers-list.component";
import { CustomersCardComponent } from "./customers-card/customers-card.component";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [CustomersListComponent, CustomersCardComponent]
})
export class CustomersModule {}
