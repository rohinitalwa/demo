import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../types/hero.type';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  apiUrl = 'https://66b76b1a7f7b1c6d8f1bd4ff.mockapi.io/hero/api/users';
  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl);
  }

  getHero(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.apiUrl}/${id}`);
  }
}
