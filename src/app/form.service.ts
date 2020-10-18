import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { form } from './form';


@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private http: HttpClient) {}
  private formUrl = 'https://cs251-outlab-6.herokuapp.com/initial_values/'; // URL to web api
  private serverUrl = 'https://cs251-outlab-6.herokuapp.com/add_new_feedback/';
  // private serverUrl = ' http://localhost:3000';

  getValue(): any {
    return this.http.get<form>(this.formUrl).pipe(
      tap((_) => console.log('Retrieved')),
      catchError(this.handleError<form>('Retrieval'))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  submit(Form: form): any {
    return this.http.post<form>(this.serverUrl, Form, this.httpOptions).pipe(
      tap((_) => console.log('submitted',Form)),
      catchError(this.handleError<form>('submit'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return throwError(error.message);
    };
  }
}
