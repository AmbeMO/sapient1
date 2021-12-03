import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import {OrgListComponent} from "./orgList/orgList.component";
import { CreateChangeOrgComponent } from './create-change-org/create-change-org.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ChangeRoleComponent } from './change-role/change-role.component';
import { NavComponent } from './nav/nav.component';
import { LinkBarComponent } from './link-bar/link-bar.component';
import {AppRoutingModule} from "./app.routing.module";
import {MainLayoutComponent} from "./shared/components/main-layout.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OrganizationService} from "./shared/services/organization.service";

@NgModule({
  declarations: [
    AppComponent,
    OrgListComponent,
    CreateChangeOrgComponent,
    SideBarComponent,
    ChangeRoleComponent,
    NavComponent,
    LinkBarComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    OrganizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
