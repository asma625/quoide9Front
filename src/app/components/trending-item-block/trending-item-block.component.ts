import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-trending-item-block',
  templateUrl: './trending-item-block.component.html',
  styleUrls: ['./trending-item-block.component.css']
})
export class TrendingItemBlockComponent implements OnInit {

  @Input() category: Category;
  @Input() products: Product[];

  constructor() { }

  ngOnInit(): void {
    
  }

}
