import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-trending-menu',
  templateUrl: './trending-menu.component.html',
  styleUrls: ['./trending-menu.component.css']
})
export class TrendingMenuComponent implements OnInit {

  categories: Category[];
  @Output() categoryEmitter: EventEmitter<Category> = new EventEmitter();

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getTrendingCategories();
  }

  getTrendingCategories(): void{
    this.categoryService.getTrendingCategories().subscribe((response) => (this.categories = response));
  }

  onClick(category: Category) {
    this.categoryEmitter.emit(category);
  }
}
