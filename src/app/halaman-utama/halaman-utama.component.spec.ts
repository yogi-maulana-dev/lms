import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalamanUtamaComponent } from './halaman-utama.component';

describe('HalamanUtamaComponent', () => {
  let component: HalamanUtamaComponent;
  let fixture: ComponentFixture<HalamanUtamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalamanUtamaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalamanUtamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
