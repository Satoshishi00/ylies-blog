import { async, TestBed } from '@angular/core/testing';
import { InvestissementLocatifComponent } from './investissement-locatif.component';
describe('InvestissementLocatifComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InvestissementLocatifComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(InvestissementLocatifComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=investissement-locatif.component.spec.js.map