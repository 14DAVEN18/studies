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
        loadComponent: () => import('@modules/operators/pages/bind-call-back/bind-call-back.component').then( b => b.BindCallBackComponent )
      },
      {
        path: 'nodeBindCallback',
        loadComponent: () => import('@modules/operators/pages/node-bind-callback/node-bind-callback.component').then( n => n.NodeBindCallbackComponent )
      },
      {
        path: 'defer',
        loadComponent: () => import('@modules/operators/pages/defer/defer.component').then( d => d.DeferComponent )
      },
      {
        path: 'from',
        loadComponent: () => import('@modules/operators/pages/from/from.component').then( f => f.FromComponent )
      },
      {
        path: 'fromEvent',
        loadComponent: () => import('@modules/operators/pages/from-event/from-event.component').then( f => f.FromEventComponent )
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorsRoutingModule { }