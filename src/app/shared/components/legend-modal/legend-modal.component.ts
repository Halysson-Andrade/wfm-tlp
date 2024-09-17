import { Component, Inject, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-legend-modal',
  templateUrl: './legend-modal.component.html',
  styleUrls: ['./legend-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, SharedModule],
})
export class LegendModalComponent implements AfterViewInit {
  isLoading = false; // O modal começa carregando
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;

  @ViewChild('tableContainer', { static: false }) tableContainer!: ElementRef;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { name: string; details: any[] },
    private dialogRef: MatDialogRef<LegendModalComponent>,
    private cdr: ChangeDetectorRef,
  ) {
    // Configura o dataSource e as colunas dinamicamente
    this.dataSource = new MatTableDataSource(data.details);
    this.displayedColumns = data.details.length > 0 ? Object.keys(data.details[0]) : [];
  }
  ngAfterViewInit(): void {
    this.dialogRef.updatePosition({ top: '50px', left: '100px' });
    this.cdr.detectChanges(); // Força a detecção de mudanças após o carregamento completo
  }
  onClose(): void {
    this.dialogRef.close();
  }
  
  exportData(): void {
    // Lógica para exportação de dados
    console.log('Exporting data:', this.data.details);
  }

}
