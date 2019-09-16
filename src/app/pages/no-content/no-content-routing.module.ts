import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {NoContentComponent} from './no-content.component';

const routes: Routes = [
  {
    path: '',
    component: NoContentComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class NoContentRoutingModule {
}
