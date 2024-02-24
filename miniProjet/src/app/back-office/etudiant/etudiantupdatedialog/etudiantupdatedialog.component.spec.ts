import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantupdatedialogComponent } from './etudiantupdatedialog.component';

describe('EtudiantupdatedialogComponent', () => {
  let component: EtudiantupdatedialogComponent;
  let fixture: ComponentFixture<EtudiantupdatedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtudiantupdatedialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtudiantupdatedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
