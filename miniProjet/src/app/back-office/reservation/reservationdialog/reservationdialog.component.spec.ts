import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationdialogComponent } from './reservationdialog.component';

describe('ReservationdialogComponent', () => {
  let component: ReservationdialogComponent;
  let fixture: ComponentFixture<ReservationdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationdialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
