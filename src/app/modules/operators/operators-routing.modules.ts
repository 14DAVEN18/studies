import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsComponent } from './pages/operators/operators.component';

const routes: Routes = [
  {
    path: '',
    component: OperatorsComponent,
    children: [
      {
        path: 'ajax',
        loadComponent: () => import('@modules/operators/pages/ajax/ajax.component').then( a => a.AjaxComponent )
      },
      {
        path: 'bindCallback',
        loadComponent: () => import('@modules/operators/pages/bind-call-back/bind-call-back.component').then( b => b.BindCallBackComponent)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorsRoutingModule { }