import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangepasswordRoutingModule } from './changepassword-routing.module';
import { ChangepasswordComponent } from './changepassword.component';


@NgModule({
  declarations: [ChangepasswordComponent],
  imports: [
    CommonModule,
    ChangepasswordRoutingModule
  ]
})
export class ChangepasswordModule { }
