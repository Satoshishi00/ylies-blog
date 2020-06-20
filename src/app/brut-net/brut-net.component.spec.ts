import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrutNetComponent } from './brut-net.component';

describe('BrutNetComponent', () => {
  let component: BrutNetComponent;
  let fixture: ComponentFixture<BrutNetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrutNetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrutNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
