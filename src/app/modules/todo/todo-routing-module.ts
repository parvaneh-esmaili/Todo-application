import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Todo } from './todo';
import { List } from './pages/list/list';
import { Add } from './pages/add/add';
import { Edit } from './pages/edit/edit';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { authGuard } from '../../guards/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: Todo,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: List, canActivate: [authGuard] },
      { path: 'add', component: Add, canActivate: [authGuard] },
      { path: 'edit/:documentId', component: Edit, canActivate: [authGuard] },
      { path: 'register', component: Register },
      { path: 'login', component: Login },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
