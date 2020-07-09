import { async, TestBed } from '@angular/core/testing';
import { TabAmortissementComponent } from './tab-amortissement.component';
describe('TabAmortissementComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TabAmortissementComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TabAmortissementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tab-amortissement.component.spec.js.map