import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character } from './character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private apiUrl = 'https://hp-api.onrender.com/api/characters';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl);
  }

  getCharacterById(id: string): Observable<Character | undefined> {
    return this.getCharacters().pipe(
      map((characters) => characters.find(character => character.id === id))
    );
  }  
}
