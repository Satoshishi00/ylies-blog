import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let SeoService = class SeoService {
    constructor(title, meta) {
        this.title = title;
        this.meta = meta;
    }
    updateTitle(title) {
        this.title.setTitle(title);
    }
    updateDescription(desc) {
        this.meta.updateTag({ name: 'description', content: desc });
    }
    updateKeywords(keywords) {
        this.meta.updateTag({ name: 'keywords', content: keywords });
    }
    updateOgUrl(url) {
        this.meta.updateTag({ property: 'og:url', content: url });
    }
    updateOgImage(ogimage) {
        this.meta.updateTag({ property: 'og:image', content: ogimage });
    }
    updateOgTitle(ogtitle) {
        this.meta.updateTag({ property: 'og:title', content: ogtitle });
    }
    updateOgDesc(ogdesc) {
        this.meta.updateTag({ property: 'og:description', content: ogdesc });
    }
};
SeoService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SeoService);
export { SeoService };
//# sourceMappingURL=seo.service.js.map