import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class AppService {


  constructor(private httpClient: HttpClient) { }

  public get(path: string): Observable<any> {
    return this.httpClient.get(path).pipe(catchError(this.formatErrors));
      ;
  }

    public formatErrors(error: any): Observable<any> {
    return throwError(error.error);
  }

}