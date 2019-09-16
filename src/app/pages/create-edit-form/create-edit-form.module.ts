import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {CreateEditFormComponent} from './create-edit-form.component';
import {CreateEditFormRoutingModule} from './create-edit-form-routing.module';
import {LoaderModule} from '../../loader/loader.module';
import {FormComponent} from './components/form/form.component';
import {AddComponent} from './pages/add/add.component';
import {EditComponent} from './pages/edit/edit.component';

@NgModule({
  declarations: [
    CreateEditFormComponent,
    FormComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    CreateEditFormRoutingModule,
    ReactiveFormsModule,
    LoaderModule
  ]
})
export class CreateEditFormModule {
}
