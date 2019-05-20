import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OrdersRoutingModule } from "./orders-routing.module";
import { OrdersListComponent } from "./orders-list/orders-list.component";

import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
  imports: [CommonModule, OrdersRoutingModule, MatTabsModule],
  declarations: [OrdersListComponent]
})
export class OrdersModule {}
