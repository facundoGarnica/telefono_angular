import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateContactoComponent } from './template-contacto.component';

describe('TemplateContactoComponent', () => {
  let component: TemplateContactoComponent;
  let fixture: ComponentFixture<TemplateContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateContactoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
