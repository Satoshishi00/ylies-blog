import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private url = 'https://api.brainers.xyz/email';

  private httpOptions = {
    headers: new HttpHeaders({
      id: '44',
      security: 'false',
      pepper: '32ea4d17d3020987b6aa64e6a671e456243b91c1',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  saveAppareilsToServer() {
    this.httpClient.get(this.url, this.httpOptions).subscribe(
      () => {
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }
}
