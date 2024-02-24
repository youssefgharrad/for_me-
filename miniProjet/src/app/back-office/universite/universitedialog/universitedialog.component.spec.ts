import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitedialogComponent } from './universitedialog.component';

describe('UniversitedialogComponent', () => {
  let component: UniversitedialogComponent;
  let fixture: ComponentFixture<UniversitedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniversitedialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniversitedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
