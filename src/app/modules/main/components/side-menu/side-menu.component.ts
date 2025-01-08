import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '@modules/main/interfaces/category';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.sass'
})
export class SideMenuComponent {
  public expandedCategory: string | null = null

  public categories: Category[] = [
    {
      categoryName: 'Operadores',
      items: [ 
        { name: 'Ajax',          path: '/operators/ajax' },
        { name: 'Bind Callback', path: '/operators/bindCallback'}
      ],
      path: '/operators'
    },
    {
      categoryName: 'Definiciones',
      items: [
        { name: 'Asíncrono', path: '/definitions', queryParams: { q: 'asynchronous' }}
      ],
      path: '/definitions'
    }
  ]

  constructor(private readonly router: Router) {}

  toggleCategory(categoryName: string): void {
    this.expandedCategory = this.expandedCategory === categoryName ? null : categoryName;
  }

  public navigateTo(item: {path: string, queryParams?: any}) {
    if(item.queryParams){
      this.router.navigate([item.path], { queryParams: item.queryParams})
    } else {
      this.router.navigate([item.path])
    }
  }
}
