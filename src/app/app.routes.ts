import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadChildren: () =>
        import('./modules/todo/todo-module').then((m) => m.TodoModule)
    }
];
