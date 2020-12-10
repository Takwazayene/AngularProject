import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {EdituserComponent} from './edituser/edituser.component';
import {DeleteuserComponent} from "./deleteuser/deleteuser.component";
import { UpdateComponent } from './update/update.component';
import {AdduserComponent} from "./adduser/adduser.component";
import {ListUsersComponent} from "./list-users/list-users.component";
import { EmployeComponent } from './employe/employe.component';
import { RegisterComponent } from './register/register.component';
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

const APP_ROUTING: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  //{path: '**', redirectTo: 'list'},
  {path: 'add/employe', component: EmployeComponent},
  {path: 'update/user/:id', component: UpdateComponent},
  {path: 'user', component: UsersComponent},
  {path: 'user/:id', component: EdituserComponent},
  {path: 'delete/user/:id', component: DeleteuserComponent},
  {path: 'add/user', component: AdduserComponent},
  {path: 'list', component: ListUsersComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'add/resto', component: AddrestoComponent},
  {path: 'list/resto', component: ListrestoComponent},
  {path: 'delete/resto/:id', component: DeleterestoComponent},
  {path: 'edit/resto/:id', component: EditrestoComponent},
  {path: 'list/plat', component: ListplatComponent},
  {path: 'delete/plat/:id', component: DeleteplatComponent},
  {path: 'edit/plat/:id', component: EditplatComponent},
  {path: 'add/plat', component: AddplatComponent},
  {path: 'list/category', component: ListcategoryComponent},
  {path: 'prix', component: CalculprixComponent},


  





];



export const ROUTING = RouterModule.forRoot(APP_ROUTING);



