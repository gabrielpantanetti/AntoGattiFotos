import { Injectable } from '@angular/core'
// https://angular.io/guide/http#adding-headers IMPORTANTE!!!
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { map } from 'rxjs/operators'
import { AppSettings } from '../shared/config'

export interface Imagenes {
  Path: string
  Image: string
}

@Injectable()
export class ImagenesService {
  apiUrl = AppSettings.API_ENDPOINT + '/imagen/'

  constructor (private http: HttpClient) {}

  getImagenesForFolder ({ folder$, ext$ }: { folder$: string; ext$: string }) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET'
      })
    }

    var url = `${this.apiUrl}${folder$}/${ext$}`

    //console.log(url);

    return this.http.get<Imagenes>(url).pipe(
      map(res => {
        //console.log(res)
        return res
      })
    )
  }

  getImagenesForSubFolder ({
    folder$,
    subfolder$,
    ext$
  }: {
    folder$: string
    subfolder$: string
    ext$: string
  }) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET'
      })
    }

    var url = `${this.apiUrl}${folder$}/${subfolder$}/${ext$}`

    return this.http.get<Imagenes>(url, httpOptions).pipe(
      map(res => {
        return res
      })
    )
  }
}
