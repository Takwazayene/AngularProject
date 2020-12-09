import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { EdituserComponent } from './edituser/edituser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import {RouterModule} from '@angular/router';
import {ROUTING} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AdduserComponent } from './adduser/adduser.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { EmployeComponent } from './employe/employe.component';
import { Nav2Component } from './nav2/nav2.component';
import { TitreComponent } from './titre/titre.component';
import { RegisterComponent } from './register/register.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { AddrestoComponent } from './resto/addresto/addresto.component';
import { ListrestoComponent } from './resto/listresto/listresto.component';
import { DeleterestoComponent } from './resto/deleteresto/deleteresto.component';
import { EditrestoComponent } from './resto/editresto/editresto.component';
import { ListplatComponent } from './plat/listplat/listplat.component';
import { DeleteplatComponent } from './plat/deleteplat/deleteplat.component';
import { EditplatComponent } from './plat/editplat/editplat.component';
import { AddplatComponent } from './plat/addplat/addplat.component';
import { ListcategoryComponent } from './category/listcategory/listcategory.component';
import { CalculprixComponent } from './plat/calculprix/calculprix.component';
import { FormsModule } from '@angular/forms' ;
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule} from 'ngx-pagination';
import { pdfMake } from 'pdfmake/build/pdfmake';
import { pdfFonts} from 'pdfmake/build/vfs_fonts';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EdituserComponent,
    DeleteuserComponent,
    UpdateComponent,
    AdduserComponent,
    ListUsersComponent,
    NavComponent,
    EmployeComponent,
    Nav2Component,
    TitreComponent,
    RegisterComponent,
    AddrestoComponent,
    ListrestoComponent,
    DeleterestoComponent,
    EditrestoComponent,
    ListplatComponent,
    DeleteplatComponent,
    EditplatComponent,
    AddplatComponent,
    ListcategoryComponent,
    CalculprixComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ROUTING, HttpClientModule, ReactiveFormsModule, BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2OrderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
