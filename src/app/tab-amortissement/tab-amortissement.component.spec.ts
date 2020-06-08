import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAmortissementComponent } from './tab-amortissement.component';

describe('TabAmortissementComponent', () => {
  let component: TabAmortissementComponent;
  let fixture: ComponentFixture<TabAmortissementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAmortissementComponent ]
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
