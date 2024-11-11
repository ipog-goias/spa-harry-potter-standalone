import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharactersContentListFilterComponent } from './characters/characters-content-list-filter/characters-content-list-filter.component';
import { CharactersDashboardComponent } from "./characters/characters-dashboard/characters-dashboard.component";
import { MenuComponent } from "./shared/menu/menu.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharactersContentListFilterComponent, CharactersDashboardComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Adiciona o esquema de elementos personalizados
})
export class AppComponent {
  title = 'spa-harry-potter';
}
