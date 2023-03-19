import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalamanDuaComponent } from './halaman-dua.component';

describe('HalamanDuaComponent', () => {
  let component: HalamanDuaComponent;
  let fixture: ComponentFixture<HalamanDuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalamanDuaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalamanDuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
