import { ProductService } from './../services/product.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import * as fromProductActions from './products.actions'
import { Products } from '../models/products.model';


@Injectable()
export class ProductEffects {


  searchProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromProductActions.searchProduct),
      switchMap(({ searchQuery }) => this.productService.search(searchQuery).pipe(
        map((data: Products[]) => fromProductActions.loadProductss({ productss: data }))
      )))
  });

  constructor(private actions$: Actions, private productService: ProductService) { }

}
