import { Component } from '@angular/core';
import { Category } from '../interfaces/category';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.sass'
})
export class MainComponent {

  public categories: Category[] = [
    {
      categoryName: 'Operadores',
      items: [ 'Algún operador' ]
    }
  ]

}
