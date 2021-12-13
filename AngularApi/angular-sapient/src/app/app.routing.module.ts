import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {OrgListComponent} from "./orgList/orgList.component";
import {CreateOrgComponent} from "./create-org/create-org.component";
import {MainLayoutComponent} from "./shared/components/main-layout.component";
import {ChangeRoleComponent} from "./change-role/change-role.component";
import {UpdateOrgComponent} from "./udate-org/update-org.component";

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
