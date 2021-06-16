import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingItemBlockComponent } from './trending-item-block.component';

describe('TrendingItemBlockComponent', () => {
  let component: TrendingItemBlockComponent;
  let fixture: ComponentFixture<TrendingItemBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingItemBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingItemBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
