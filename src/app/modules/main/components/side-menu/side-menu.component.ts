import { Component } from '@angular/core';
import { Category } from '@modules/main/interfaces/category';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.sass'
})
export class SideMenuComponent {
  public expandedCategory: string | null = null;

  public categories: Category[] = [
    {
      categoryName: 'Operadores',
      items: [ 
        { name: 'Ajax', path: '/operators/ajax' }
      ],
      path: '/operators'
    },
    {
      categoryName: 'Definiciones',
      items: [
        { name: 'Asíncrono', path: '/definitions/asynchronous'}
      ],
      path: '/definitions'
    }
  ]

  toggleCategory(categoryName: string): void {
    this.expandedCategory = this.expandedCategory === categoryName ? null : categoryName;
  }
}
