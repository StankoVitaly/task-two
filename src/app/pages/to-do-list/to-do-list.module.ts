import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ToDoListComponent} from './to-do-list.component';
import {ToDoListRoutingModule} from './to-do-list-routing.module';
import {LoaderModule} from '../../loader/loader.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ToDoListComponent],
  imports: [
    CommonModule,
    ToDoListRoutingModule,
    LoaderModule,
    FormsModule
  ]
})
export class ToDoListModule {
}
