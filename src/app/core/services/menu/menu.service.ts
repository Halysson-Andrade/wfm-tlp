import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuItems = new BehaviorSubject<any[]>([]);

  get menu(): Observable<any[]> {
    return this.menuItems.asObservable();
  }

  setMenu(items: any[]): void {
    this.menuItems.next(items);
  }

  clearMenu(): void {
    this.menuItems.next([]);
  }
}
