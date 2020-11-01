import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from './products.reducer';

const productSelector = createFeatureSelector(fromStore.productsesFeatureKey);

export const selectAllProduct = createSelector(
    productSelector,
    fromStore.selectAll
);