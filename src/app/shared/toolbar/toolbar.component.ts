import { Component, EventEmitter, Output } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [ToolbarModule, ButtonModule, InputTextModule, SplitButtonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  @Output() searchTermChange = new EventEmitter<string>(); // Evento para emitir o termo de pesquisa
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Update', icon: 'pi pi-refresh' },
      { label: 'Delete', icon: 'pi pi-times' },
      { label: 'Home', icon: 'pi pi-home' }
    ];
  }

  onSearchChange(event: any) {
    const term = event.target.value;
    console.log('Emitting search term:', term); // Verifique o termo de pesquisa emitido

          // Emitir o termo de pesquisa somente se tiver 3 ou mais caracteres
    if (term.length >= 3 || term.length === 0) {
      this.searchTermChange.emit(term); // Emite o termo de pesquisa
    }
  }
}
