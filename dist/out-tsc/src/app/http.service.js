import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let HttpService = class HttpService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'https://mailhub.ylies.xyz?message=';
        this.httpOptions = {};
    }
    sendMail(text) {
        let complteURL = this.url + text;
        this.httpClient.get(complteURL, this.httpOptions).subscribe(() => {
            console.log('Enregistrement terminé !');
        }, (error) => {
            console.log('Erreur ! : ' + error);
        });
    }
};
HttpService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], HttpService);
export { HttpService };
//# sourceMappingURL=http.service.js.map