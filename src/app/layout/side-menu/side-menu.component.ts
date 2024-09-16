import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../core/services/menu/menu.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent implements OnInit {
  menuItems: any[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.menu.subscribe((items) => {
      this.menuItems = items;
    });
  }
}
