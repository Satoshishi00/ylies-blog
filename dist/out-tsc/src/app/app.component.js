import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
let AppComponent = class AppComponent {
    constructor(router, activatedRoute, _seoService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._seoService = _seoService;
        this.pageTitle = 'Yliès Rochdi - le blog';
    }
    ngOnInit() {
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd), map(() => this.activatedRoute), map((route) => {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        }), filter((route) => route.outlet === 'primary'), mergeMap((route) => route.data))
            .subscribe((event) => {
            if (event['title'] != undefined) {
                this.pageTitle = event['title'] + ' ' + event['description'];
                this._seoService.updateTitle(event['title']);
                this._seoService.updateKeywords(event['keywords']);
                this._seoService.updateDescription(event['description']);
                this._seoService.updateOgUrl(event['ogUrl']);
                this._seoService.updateOgImage(event['ogImage']);
                this._seoService.updateOgTitle(event['title']);
                this._seoService.updateOgDesc(event['description']);
            }
        });
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.sass'],
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map