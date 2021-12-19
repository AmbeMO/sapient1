import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import {OrgListComponent} from "./modules/organization/orgList/orgList.component";
import { CreateOrgComponent } from './modules/organization/create-org/create-org.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { ChangeRoleComponent } from './modules/user/change-role/change-role.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { LinkBarComponent } from './shared/components/link-bar/link-bar.component';
import {AppRoutingModule} from "./app.routing.module";
import {MainLayoutComponent} from "./shared/components/layout/main-layout.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OrganizationService} from "./shared/services/organization.service";
import {SearchPipe} from "./shared/pipes/search.pipe";
import {UpdateOrgComponent} from "./modules/organization/udate-org/update-org.component";
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
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {DialogComponent} from "./shared/dialog/dialog.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";

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
    UpdateOrgComponent,
    DialogComponent,
  ],
  entryComponents : [DialogComponent],
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
        MatSidenavModule,
        MatDialogModule,
        MatSnackBarModule
    ],
  providers: [
    OrganizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
