import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CreateEditFormComponent} from './create-edit-form.component';
import {AddComponent} from './pages/add/add.component';
import {EditComponent} from './pages/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: CreateEditFormComponent, children: [
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: 'edit/:id',
        component: EditComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class CreateEditFormRoutingModule {
}
