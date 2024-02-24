import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambreFromDialogComponent } from './chambre-from-dialog.component';

describe('ChambreFromDialogComponent', () => {
  let component: ChambreFromDialogComponent;
  let fixture: ComponentFixture<ChambreFromDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChambreFromDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChambreFromDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
