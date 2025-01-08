import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "@modules/main/page/main.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'operators',
        loadChildren: () => import('@modules/operators/operators.module').then( o => o.OperatorsModule )
      },
      {
        path: 'definitions',
        loadComponent: () => import('@modules/definitions/definitions.component').then( d => d.DefinitionsComponent)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }