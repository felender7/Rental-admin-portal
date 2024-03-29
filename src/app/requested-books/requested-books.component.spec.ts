import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedBooksComponent } from './requested-books.component';

describe('RequestedBooksComponent', () => {
  let component: RequestedBooksComponent;
  let fixture: ComponentFixture<RequestedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestedBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
