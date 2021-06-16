import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { BlockCategoryComponent } from './components/block-category/block-category.component';
import { TrendingItemComponent } from './components/trending-item/trending-item.component';
import { TrendingItemBlockComponent } from './components/trending-item-block/trending-item-block.component';
import { ContentBlockCategoryComponent } from './components/content-block-category/content-block-category.component';
import { TrendingMenuComponent } from './components/trending-menu/trending-menu.component';
import { TrendingAreaComponent } from './components/trending-area/trending-area.component';
import { MostSearchedAreaComponent } from './components/most-searched-area/most-searched-area.component';
import { MostSearchedItemBlockComponent } from './components/most-searched-item-block/most-searched-item-block.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CategoriesComponent, HomeComponent, BlockCategoryComponent, TrendingItemComponent, TrendingItemBlockComponent, ContentBlockCategoryComponent, TrendingMenuComponent, TrendingAreaComponent, MostSearchedAreaComponent, MostSearchedItemBlockComponent, LoginComponent, SignupComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
