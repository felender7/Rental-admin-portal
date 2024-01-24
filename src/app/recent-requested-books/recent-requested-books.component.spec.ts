import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentRequestedBooksComponent } from './recent-requested-books.component';

describe('RecentRequestedBooksComponent', () => {
  let component: RecentRequestedBooksComponent;
  let fixture: ComponentFixture<RecentRequestedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentRequestedBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentRequestedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
