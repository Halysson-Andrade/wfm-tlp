import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { MenuService } from 'src/app/core/services/menu/menu.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent implements OnInit {
  menuLabel: string = '';
  userName: string = '';
  userEmail: string = '';
  constructor(
    private menuService: MenuService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const nameFromStorage = sessionStorage.getItem('usr_name');
    const emailFromStorage = sessionStorage.getItem('usr_email');

    this.userName = nameFromStorage ? JSON.parse(nameFromStorage) : 'Usuário';
    this.userEmail = emailFromStorage
      ? JSON.parse(emailFromStorage)
      : 'email@dominio.com';

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.router.url;
        this.menuLabel = this.menuService.getMenuLabelByRoute(currentRoute);
      });

    const initialRoute = this.router.url;
    this.menuLabel = this.menuService.getMenuLabelByRoute(initialRoute);
  }
}
