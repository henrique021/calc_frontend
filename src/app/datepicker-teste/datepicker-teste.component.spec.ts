import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerTesteComponent } from './datepicker-teste.component';

describe('DatepickerTesteComponent', () => {
  let component: DatepickerTesteComponent;
  let fixture: ComponentFixture<DatepickerTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerTesteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickerTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
