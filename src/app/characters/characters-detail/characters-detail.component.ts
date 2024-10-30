import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../character.model';
import { CharactersService } from '../characters.service';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-characters-detail',
  standalone: true,
  imports: [
    CommonModule,
    PanelModule,
    AvatarModule
  ],
  templateUrl: './characters-detail.component.html',
  styleUrl: './characters-detail.component.css'
})
export class CharactersDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(CharactersService);
  character: Character | undefined;

  ngOnInit() {
    const characterId = this.route.snapshot.paramMap.get('id');
    if (characterId) {
      this.service.getCharacterById(characterId).subscribe((data) => {
        this.character = data;
      });
    }
  }
}
