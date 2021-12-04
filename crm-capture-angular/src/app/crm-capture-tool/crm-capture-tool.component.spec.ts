import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmCaptureToolComponent } from './crm-capture-tool.component';

describe('CrmCaptureToolComponent', () => {
  let component: CrmCaptureToolComponent;
  let fixture: ComponentFixture<CrmCaptureToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmCaptureToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmCaptureToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
