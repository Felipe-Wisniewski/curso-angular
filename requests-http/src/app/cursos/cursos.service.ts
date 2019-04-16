import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap, delay } from 'rxjs/operators'
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Curso[]>(this.API)
      .pipe(
        delay(4000),
        tap(console.log)
      );
  }
}
