import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './page/main.component';
import { MainRoutingModule } from './main-routing.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';



@NgModule({
  declarations: [
    MainComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
