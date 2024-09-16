import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuLabelSource = new BehaviorSubject<string>('');
  currentMenuLabel = this.menuLabelSource.asObservable();

  constructor() {}

  changeMenuLabel(menuLabel: string) {
    this.menuLabelSource.next(menuLabel);
  }

  getMenuLabelByRoute(route: string): string {
    const menus = this.getMenus();
    const matchedMenu = menus.find((menu) => menu.mnu_routerlink === route);
    return matchedMenu ? matchedMenu.mnu_label : '';
  }

  getMenus(): any[] {
    const menus = sessionStorage.getItem('menus');
    if (menus) {
      return JSON.parse(menus);
    }
    return [];
  }

  getParentMenus(): any[] {
    const menus = this.getMenus();
    return menus.filter((menu) => menu.mnu_parent === null);
  }

  getChildMenus(parentId: number): any[] {
    const menus = this.getMenus();
    return menus.filter((menu) => menu.mnu_parent === parentId);
  }
}
