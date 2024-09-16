import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  tableColumns: { field: string; header: string }[] = [];
  permissionsData: any[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.fetchPermissions();
    this.setupColumns();
  }

  fetchPermissions() {
    const userId = sessionStorage.getItem('usr_id');
    if (userId) {
      this.userService.getUsers(userId).subscribe((data) => {
        console.log(data.data);
        this.permissionsData = data.data;
      });
    }
  }

  setupColumns() {
    this.tableColumns = [
      { field: 'pms_action', header: 'Nome' },
      { field: 'pms_description', header: 'Descrição' },
      { field: 'pms_status', header: 'Status' },
      { field: 'pms_updated_at', header: 'Última Atualização' },
      { field: 'actions', header: 'Ações' },
    ];
  }

  onEdit(row: any) {
    console.log('Editar linha', row);
    // Implementar lógica de edição
  }

  onDelete(row: any) {
    console.log('Excluir linha', row);
    // Implementar lógica de exclusão
  }
}
