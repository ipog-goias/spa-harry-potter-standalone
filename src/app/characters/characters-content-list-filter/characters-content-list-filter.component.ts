import { Component, OnInit } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { Character } from '../character.model';
import { CharactersService } from '../characters.service';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-characters-content-list-filter',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    DropdownModule,
    InputTextModule
  ],
  templateUrl: './characters-content-list-filter.component.html',
  styleUrl: './characters-content-list-filter.component.css'
})
export class CharactersContentListFilterComponent implements OnInit {
  characters: Character[] = [];
  statuses: any[] = [];
  loading: boolean = true;

  constructor(private characterService: CharactersService) {
  }

  ngOnInit() {
    this.characterService.getCharacters().subscribe((characters) => {
      this.characters = characters;
      console.log(characters);
      this.loading = false;
    });

    this.statuses = [
      { label: 'Student', value: 'student' },
      { label: 'Staff', value: 'staff' }
    ];
  }

  clear(table: Table) {
    table.clear();
  }

  filterTable(target: any, field: string, matchMode: string, table: Table) {
    table.filter(target.value, field, matchMode);
  }

  getSeverity(status: string) {
    switch (status) {
      case 'student':
        return 'info';
      case 'staff':
        return 'success';
      default:
        return 'secondary';
    }
  }
}