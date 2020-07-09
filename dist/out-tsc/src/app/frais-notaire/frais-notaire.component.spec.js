import { async, TestBed } from '@angular/core/testing';
import { FraisNotaireComponent } from './frais-notaire.component';
describe('FraisNotaireComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FraisNotaireComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(FraisNotaireComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=frais-notaire.component.spec.js.map