import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambreFromUpdaDialogComponent } from './chambre-from-upda-dialog.component';

describe('ChambreFromUpdaDialogComponent', () => {
  let component: ChambreFromUpdaDialogComponent;
  let fixture: ComponentFixture<ChambreFromUpdaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChambreFromUpdaDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChambreFromUpdaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
