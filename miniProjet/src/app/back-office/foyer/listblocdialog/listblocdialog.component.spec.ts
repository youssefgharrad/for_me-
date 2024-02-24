import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListblocdialogComponent } from './listblocdialog.component';

describe('ListblocdialogComponent', () => {
  let component: ListblocdialogComponent;
  let fixture: ComponentFixture<ListblocdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListblocdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListblocdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
