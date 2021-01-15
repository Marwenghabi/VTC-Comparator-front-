import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComparatorFormComponent } from "./pages/comparator-form/comparator-form.component";
import { ComparatorOffersComponent } from "./pages/comparator-offers/comparator-offers.component";
import { OffersFullListComponent } from "./ui-segments/offers-full-list/offers-full-list.component";
import {OffresCommunComponent} from "./ui-segments/offres-commun/offres-commun.component";

const mainRoutes: Routes = [
  {
    path: "",
    component: ComparatorFormComponent,
  },
  {
    path: "offers",
    component: ComparatorOffersComponent,
  },

 
  {
    path: 'offer-fulllist',
    component:  OffersFullListComponent,
  },
  {
    path: 'offer-commun',
    component:  OffresCommunComponent,
  },
  {
    path: "info",
    loadChildren: () =>
      import("../shared/shared.module").then((m) => m.SharedModule),
  },

  /*{
    path: 'filter',
    component: FiltersComponent
  },
  {
    path: 'liste',
    component: OffersListComponent
  },*/
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule],
})
export class MainFeatureRoutingModule {}
