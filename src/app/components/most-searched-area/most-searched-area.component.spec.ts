import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostSearchedAreaComponent } from './most-searched-area.component';

describe('MostSearchedProductComponent', () => {
  let component: MostSearchedAreaComponent;
  let fixture: ComponentFixture<MostSearchedAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostSearchedAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostSearchedAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
