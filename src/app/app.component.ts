import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { SeoService } from '../app/seo.service';

import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  pageTitle = 'Yliès Rochdi - le blog';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _seoService: SeoService
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route: any) => route.outlet === 'primary'),
        mergeMap((route: any) => route.data)
      )
      .subscribe((event: any) => {
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
}
