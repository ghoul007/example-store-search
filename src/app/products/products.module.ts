import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromProduct from './store';
import * as fromProducts from './store/products.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromProduct.productFeatureKey, fromProduct.reducers, { metaReducers: fromProduct.metaReducers }),
    StoreModule.forFeature(fromProducts.productsesFeatureKey, fromProducts.reducer),
  ]
})
export class ProductsModule { }
