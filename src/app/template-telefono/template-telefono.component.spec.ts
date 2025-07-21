import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTelefonoComponent } from './template-telefono.component';

describe('TemplateTelefonoComponent', () => {
  let component: TemplateTelefonoComponent;
  let fixture: ComponentFixture<TemplateTelefonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateTelefonoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
