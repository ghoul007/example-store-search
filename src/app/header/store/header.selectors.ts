import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './header.reducer';

export const selectHeaderFeature = createFeatureSelector('header');
export const selectHeaderCount = createSelector(
    selectHeaderFeature,
    (state: State) => state.count
);