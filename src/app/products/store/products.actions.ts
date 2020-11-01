import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Products } from '../models/products.model';

export const loadProductss = createAction(
  '[Products/API] Load Productss', 
  props<{ productss: Products[] }>()
);

export const addProducts = createAction(
  '[Products/API] Add Products',
  props<{ products: Products }>()
);

export const upsertProducts = createAction(
  '[Products/API] Upsert Products',
  props<{ products: Products }>()
);

export const addProductss = createAction(
  '[Products/API] Add Productss',
  props<{ productss: Products[] }>()
);

export const upsertProductss = createAction(
  '[Products/API] Upsert Productss',
  props<{ productss: Products[] }>()
);

export const updateProducts = createAction(
  '[Products/API] Update Products',
  props<{ products: Update<Products> }>()
);

export const updateProductss = createAction(
  '[Products/API] Update Productss',
  props<{ productss: Update<Products>[] }>()
);

export const deleteProducts = createAction(
  '[Products/API] Delete Products',
  props<{ id: string }>()
);

export const deleteProductss = createAction(
  '[Products/API] Delete Productss',
  props<{ ids: string[] }>()
);

export const clearProductss = createAction(
  '[Products/API] Clear Productss'
);
