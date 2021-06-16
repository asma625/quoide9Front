import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';

@Component({
  selector: 'app-content-block-category',
  templateUrl: './content-block-category.component.html',
  styleUrls: ['./content-block-category.component.css']
})
export class ContentBlockCategoryComponent implements OnInit {

  @Input() category : Category;

  constructor() { }

  ngOnInit(): void {
  }

}
