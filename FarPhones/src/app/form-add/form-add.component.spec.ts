import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddComponent } from './form-add.component';

describe('FormAddComponent', () => {
  let component: FormAddComponent;
  let fixture: ComponentFixture<FormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
