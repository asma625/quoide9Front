import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: Category[];


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
