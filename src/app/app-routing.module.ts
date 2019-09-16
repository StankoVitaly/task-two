import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/to-do-list/to-do-list.module#ToDoListModule'
  },
  {
    path: 'list',
    loadChildren: './pages/to-do-list/to-do-list.module#ToDoListModule'
  },
  {
    path: 'form',
    loadChildren: './pages/create-edit-form/create-edit-form.module#CreateEditFormModule'
  },
  {
    path: '**',
    loadChildren: './pages/no-content/no-content.module#NoContentModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
