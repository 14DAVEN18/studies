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
        { name: 'BindCallback', path: '/operators/bindCallback'},
        { name: 'NodeBindCallback', path: 'operators/nodeBindCallback' }
      ],
      path: '/operators'
    },
    {
      categoryName: 'Definiciones',
      items: [
        { name: 'Petición AJAX', path: '/definitions', queryParams: { q: 'ajax request' } },
        { name: 'API callback', path: '/definitions', queryParams: { q: 'callback api' } },
        { name: 'Asíncrono', path: '/definitions', queryParams: { q: 'asynchronous' } },
        { name: 'Observable', path: '/definitions', queryParams: { q: 'observable' } },
        { name: 'Suscripción', path: '/definitions', queryParams: { q: 'subscription' } }
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
