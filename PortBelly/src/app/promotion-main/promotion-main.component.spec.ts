import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionMainComponent } from './promotion-main.component';

describe('PromotionMainComponent', () => {
  let component: PromotionMainComponent;
  let fixture: ComponentFixture<PromotionMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
