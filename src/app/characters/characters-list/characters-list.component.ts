import { Component, inject, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Character } from '../character.model';
import { BadgeModule } from 'primeng/badge';
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { ToolbarComponent } from '../../shared/toolbar/toolbar.component';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    CardModule,
    ToolbarComponent,
    BadgeModule,
    DialogModule,
    RatingModule
  ],
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {
  characters: Character[] = [];
  filteredCharacters: Character[] = []; // Lista de personagens filtrada

  // Set para armazenar personagens favoritados e visualizados
  favoriteCharacters = new Set<string>();
  viewedCharacters = new Set<string>();

  // Variáveis para o modal
  displayDialog = false;
  selectedCharacter: Character | null = null;

  // Variável para controlar as avaliações dos personagens
  characterRatings: { [id: string]: number } = {};

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((data) => {
      this.characters = data;
      this.filteredCharacters = [...data]; // Inicializa filteredCharacters com os dados de characters
    });
  }

  onSearchTermChange(term: string) {
    if (term.length === 0) {
      // Se o termo de pesquisa estiver vazio, exibe todos os personagens
      this.filteredCharacters = [...this.characters];
    } else {
      // Filtrar personagens com base no termo de pesquisa
      this.filteredCharacters = this.characters.filter(character =>
        character.name.toLowerCase().includes(term.toLowerCase()) ||
        (character.house && character.house.toLowerCase().includes(term.toLowerCase())) ||
        (character.actor && character.actor.toLowerCase().includes(term.toLowerCase()))
      );
    }
  }
  

  viewCharacter(character: Character) {
    console.log('Viewing character:', character);
  }

  favoriteCharacter(character: Character) {
    console.log('Favoriting character:', character);
  }

  getHouseBadgeColor(house: string): "success" | "info" | "warning" | "danger" | "secondary" {
    switch (house.toLowerCase()) {
      case 'gryffindor':
        return 'danger'; // vermelho
      case 'slytherin':
        return 'success'; // verde
      case 'hufflepuff':
        return 'warning'; // amarelo
      case 'ravenclaw':
        return 'info'; // azul
      default:
        return 'secondary'; // cor padrão
    }
  }

  toggleFavorite(characterId: string) {
    if (this.favoriteCharacters.has(characterId)) {
      this.favoriteCharacters.delete(characterId);
    } else {
      this.favoriteCharacters.add(characterId);
    }
  }

  toggleView(characterId: string) {
    if (this.viewedCharacters.has(characterId)) {
      this.viewedCharacters.delete(characterId);
    } else {
      this.viewedCharacters.add(characterId);
    }
  }

  isFavorite(characterId: string): boolean {
    return this.favoriteCharacters.has(characterId);
  }

  isViewed(characterId: string): boolean {
    return this.viewedCharacters.has(characterId);
  }

  openDialog(character: Character) {
    console.log('clicou');
    this.selectedCharacter = character;
    this.displayDialog = true;
  }

  closeDialog() {
    this.displayDialog = false;
    this.selectedCharacter = null;
  }

   // Função para definir a avaliação de um personagem
   setRating(characterId: string, rating: number) {
    this.characterRatings[characterId] = rating;
  }
}
