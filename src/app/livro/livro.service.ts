import { Injectable } from '@angular/core';
import { Livro } from './livro.model';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

constructor() { }

  obterLivros(): Livro[]{
    return [
      {
        id: 1,
        nome: "Senhor dos Aneis"
      },
      {
        id: 2,
        nome: "Cem anos de Solidão"
      },
      {
        id: 3,
        nome: "Memórias de um Sargento de Mílicias"
      },
      {
        id: 4,
        nome: "A Bomba"
      },
      {
        id: 5,
        nome: "Caçadores da Arca Perdida"
    } ,
      {
        id: 6,
        nome: "Os Imperdoáveis"
      },
    ];
  }

  obterLivrosObservable(): Observable<Livro[]> {
    return of(this.obterLivros()).pipe(delay(1000));
  }

}
