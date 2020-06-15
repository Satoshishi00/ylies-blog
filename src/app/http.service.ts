import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private url = 'https://mailhub.ylies.xyz?message=';

  private httpOptions = {};

  constructor(private httpClient: HttpClient) {}

  sendMail(text) {
    let complteURL = this.url + text;

    this.httpClient.get(complteURL, this.httpOptions).subscribe(
      () => {
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }
}
