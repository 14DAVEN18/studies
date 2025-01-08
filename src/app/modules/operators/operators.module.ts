import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorsComponent } from './pages/operators/operators.component';
import { OperatorsRoutingModule } from './operators-routing.modules';



@NgModule({
  declarations: [
    OperatorsComponent
  ],
  imports: [
    CommonModule,
    OperatorsRoutingModule
  ]
})
export class OperatorsModule { }
