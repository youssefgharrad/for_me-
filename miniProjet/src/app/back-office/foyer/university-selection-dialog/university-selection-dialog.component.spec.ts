import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitySelectionDialogComponent } from './university-selection-dialog.component';

describe('UniversitySelectionDialogComponent', () => {
  let component: UniversitySelectionDialogComponent;
  let fixture: ComponentFixture<UniversitySelectionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniversitySelectionDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniversitySelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
