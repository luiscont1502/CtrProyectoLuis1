import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactanosMainComponent } from './contactanos-main.component';

describe('ContactanosMainComponent', () => {
  let component: ContactanosMainComponent;
  let fixture: ComponentFixture<ContactanosMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactanosMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactanosMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
