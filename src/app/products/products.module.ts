import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromProduct from './store';
import * as fromProducts from './store/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/product.effects';
import { ProductsComponent } from './container/products/products.component';



@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromProduct.productFeatureKey, fromProduct.reducers, { metaReducers: fromProduct.metaReducers }),
    StoreModule.forFeature(fromProducts.productsesFeatureKey, fromProducts.reducer),
    EffectsModule.forFeature([ProductEffects]),
  ]
})
export class ProductsModule { }
