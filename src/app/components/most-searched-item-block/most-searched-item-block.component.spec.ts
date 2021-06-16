import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostSearchedItemBlockComponent } from './most-searched-item-block.component';

describe('MostSearchedItemBlockComponent', () => {
  let component: MostSearchedItemBlockComponent;
  let fixture: ComponentFixture<MostSearchedItemBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostSearchedItemBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostSearchedItemBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
