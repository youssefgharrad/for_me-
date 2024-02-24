import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantdialogComponent } from './etudiantdialog.component';

describe('EtudiantdialogComponent', () => {
  let component: EtudiantdialogComponent;
  let fixture: ComponentFixture<EtudiantdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtudiantdialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtudiantdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
