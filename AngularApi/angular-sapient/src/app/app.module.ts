import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import {OrgListComponent} from "./orgList/orgList.component";
import { CreateOrgComponent } from './create-org/create-org.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ChangeRoleComponent } from './change-role/change-role.component';
import { NavComponent } from './nav/nav.component';
import { LinkBarComponent } from './link-bar/link-bar.component';
import {AppRoutingModule} from "./app.routing.module";
import {MainLayoutComponent} from "./shared/components/main-layout.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OrganizationService} from "./shared/services/organization.service";
import {SearchPipe} from "./shared/search.pipe";
import {UpdateOrgComponent} from "./udate-org/update-org.component";
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";

@NgModule({
  declarations: [
    AppComponent,
    OrgListComponent,
    CreateOrgComponent,
    SideBarComponent,
    ChangeRoleComponent,
    NavComponent,
    LinkBarComponent,
    MainLayoutComponent,
    SearchPipe,
    UpdateOrgComponent
  ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatTableModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule
    ],
  providers: [
    OrganizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
