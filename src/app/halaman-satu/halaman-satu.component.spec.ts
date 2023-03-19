import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalamanSatuComponent } from './halaman-satu.component';

describe('HalamanSatuComponent', () => {
  let component: HalamanSatuComponent;
  let fixture: ComponentFixture<HalamanSatuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalamanSatuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalamanSatuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
