import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacadamComponent } from './macadam.component';

describe('MacadamComponent', () => {
  let component: MacadamComponent;
  let fixture: ComponentFixture<MacadamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacadamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacadamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
