import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Todo } from './todo';
import { List } from './pages/list/list';
import { Add } from './pages/add/add';
import { Edit } from './pages/edit/edit';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';

const routes: Routes = [
  {
    path: '',
    component: Todo,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: List },
      { path: 'add', component: Add },
      { path: 'edit/:documentId', component: Edit },
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
