
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';


export const routes: Routes = [
  { path: '', component: UserFormComponent },
  { path: 'user-list', component: UserListComponent },
  // { path: 'user-list', component: UserListComponent }
];
