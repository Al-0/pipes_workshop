import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseComponent } from './exercise.component';
import { By } from '@angular/platform-browser';
import { formatDate } from '@angular/common'; 

describe('ExerciseComponent', () => {
  let component: ExerciseComponent;
  let fixture: ComponentFixture<ExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match the bottom text',() =>{
    const board = fixture.debugElement.query(By.css('.exercise')).nativeElement;
    const today = new Date();
    const format = 'mediumDate';
    const locale = 'en';
    const formattedDate = formatDate(today, format, locale);
    expect(board.textContent).toContain(`Dear Michelle`);
    expect(board.textContent).toContain(`7 years`);
    expect(board.textContent).toContain(`It's been a while since we last spoke`);
    expect(board.textContent).toContain(formattedDate);
    expect(board.textContent).toContain(`yearbook`);
    expect(board.textContent).not.toContain(`diary`);
    expect(board.textContent).toContain(`all this time?`);
    expect(board.textContent).toContain(`DC`);
    expect(board.textContent).toContain(`2.5 years`);
    expect(board.textContent).toContain(`€120,000.00`);
    expect(board.textContent).toContain(`100%`);
    expect(board.textContent).toContain(`Your Good Old Friend`);
    const photo = fixture.debugElement.query(By.css('.cat')).nativeElement;
    expect(photo['src']).toBeTruthy();
  })
});
