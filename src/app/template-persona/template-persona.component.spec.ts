import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePersonaComponent } from './template-persona.component';

describe('TemplatePersonaComponent', () => {
  let component: TemplatePersonaComponent;
  let fixture: ComponentFixture<TemplatePersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatePersonaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatePersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
