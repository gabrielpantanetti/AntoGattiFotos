import { Injectable } from '@angular/core';
// https://angular.io/guide/http#adding-headers IMPORTANTE!!!
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppSettings } from '../shared/config';

export interface Imagenes {
  Path: string;
  Image: string;
};

@Injectable()
export class EmailService {

  apiUrl = AppSettings.API_ENDPOINT + 'email/';

  constructor(private http: HttpClient) { }

  sendMessage(body$: string) {
    var url = `${this.apiUrl}`;

    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, JSON.stringify(body$), options);

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET'
    //   })
    // };

    // var url = `${this.apiUrl}`;

    // return this.http.post(url,body$)
    //   .pipe(
    //     map(res => { return res; })
    //   );
  }
}

