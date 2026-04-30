import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentBindingComponent } from './student-binding';

describe('StudentBindingComponent', () => {
  let component: StudentBindingComponent;
  let fixture: ComponentFixture<StudentBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentBindingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});