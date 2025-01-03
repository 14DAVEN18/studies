import { Component } from '@angular/core';
import { Category } from '../interfaces/category';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.sass'
})
export class MainComponent {

  public expandedCategory: string | null = null;

  public categories: Category[] = [
    {
      categoryName: 'Operadores',
      items: [ 'Algún operador' ]
    },
    {
      categoryName: 'Otra',
      items: [ 'otra 1', 'otra 2', 'otra 3', 'otra 4', 'otra 5' ]
    }
  ]

  toggleCategory(categoryName: string): void {
    this.expandedCategory = this.expandedCategory === categoryName ? null : categoryName;
  }
}
