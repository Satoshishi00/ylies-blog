import { TestBed } from '@angular/core/testing';
import { SeoService } from './seo.service';
describe('SeoService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SeoService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=seo.service.spec.js.map