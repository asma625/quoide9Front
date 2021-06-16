import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-block-category',
  templateUrl: './block-category.component.html',
  styleUrls: ['./block-category.component.css']
})
export class BlockCategoryComponent implements OnInit {

  categories: Category[]

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getRandomCategory();
  }

    getRandomCategory(): void {
    this.categoryService
      .getRandomCategory()
      .subscribe((response: Category[]) => (this.categories = response));
  }

}
