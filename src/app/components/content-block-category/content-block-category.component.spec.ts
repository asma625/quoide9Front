import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBlockCategoryComponent } from './content-block-category.component';

describe('ContentBlockCategoryComponent', () => {
  let component: ContentBlockCategoryComponent;
  let fixture: ComponentFixture<ContentBlockCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentBlockCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBlockCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
