import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingMenuComponent } from './trending-menu.component';

describe('TrendingMenuComponent', () => {
  let component: TrendingMenuComponent;
  let fixture: ComponentFixture<TrendingMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
