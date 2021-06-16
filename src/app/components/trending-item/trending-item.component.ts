import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-trending-item',
  templateUrl: './trending-item.component.html',
  styleUrls: ['./trending-item.component.css']
})
export class TrendingItemComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
