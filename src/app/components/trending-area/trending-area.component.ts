import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-trending-area',
  templateUrl: './trending-area.component.html',
  styleUrls: ['./trending-area.component.css']
})
export class TrendingAreaComponent implements OnInit {

  products: Product[];
  currentCategory: Category;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.loadOneTrendingCategory().subscribe((response) => {this.products = response;});
  }

  getProductsFromCategory(category: Category){    
    this.productService.getProductsFromCategory(category.id).subscribe((response) => (this.products = response));
    this.currentCategory = category;
  }
}
