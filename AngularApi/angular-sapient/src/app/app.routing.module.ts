import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {OrgListComponent} from "./modules/organization/orgList/orgList.component";
import {CreateOrgComponent} from "./modules/organization/create-org/create-org.component";
import {MainLayoutComponent} from "./shared/components/layout/main-layout.component";
import {ChangeRoleComponent} from "./modules/user/change-role/change-role.component";
import {UpdateOrgComponent} from "./modules/organization/udate-org/update-org.component";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: OrgListComponent},
      {path: 'createOrg', component: CreateOrgComponent},
      {path: 'changeRole', component: ChangeRoleComponent},
      {path: 'updateOrg/:id', component :UpdateOrgComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
