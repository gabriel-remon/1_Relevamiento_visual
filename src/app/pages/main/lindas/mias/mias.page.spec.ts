import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiasPage } from './mias.page';

describe('MiasPage', () => {
  let component: MiasPage;
  let fixture: ComponentFixture<MiasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
