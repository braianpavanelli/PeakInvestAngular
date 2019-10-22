import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Usuario } from 'src/app/model/Usuario';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrlConsulta = 'http://localhost:53000/api/ConsultaUsuario';
const apiUrlCalculo = 'http://localhost:53000/api/Calculo/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(apiUrlConsulta)
      .pipe(tap(usuarios => console.log('leu os usuarios')),
        catchError(this.handleError('getUsuarios', []))
      );
  }

  getUsuario(id: number): Observable<Usuario> {
    const url = `${apiUrlConsulta}/${id}`;
    return this.http.get<Usuario>(url).pipe(
      tap(_ => console.log(`leu o usuario id=${id}`)),
      catchError(this.handleError<Usuario>(`getUsuario id=${id}`))
    );
  }

  getValor(valor: number, numParcelas: number): Observable<any> {
    const params = new HttpParams().set('valor', valor.toString()).set('numParcelas', numParcelas.toString());
    return this.http.get(apiUrlCalculo, {headers : httpOptions.headers, params})
      .pipe(tap(valores => console.log('leu os valores')),
        catchError(this.handleError('getValor', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
