import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversiteupdadialogComponent } from './universiteupdadialog.component';

describe('UniversiteupdadialogComponent', () => {
  let component: UniversiteupdadialogComponent;
  let fixture: ComponentFixture<UniversiteupdadialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniversiteupdadialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniversiteupdadialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
