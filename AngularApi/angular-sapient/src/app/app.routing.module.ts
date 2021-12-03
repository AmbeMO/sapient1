import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {OrgListComponent} from "./orgList/orgList.component";
import {CreateChangeOrgComponent} from "./create-change-org/create-change-org.component";
import {MainLayoutComponent} from "./shared/components/main-layout.component";
import {ChangeRoleComponent} from "./change-role/change-role.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: OrgListComponent},
      {path: 'createChange', component: CreateChangeOrgComponent},
      {path: 'changeRole', component: ChangeRoleComponent},


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
