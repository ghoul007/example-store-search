import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromHeader from './store/header.reducer';
import { HeaderComponent } from './header/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromHeader.headerFeatureKey, fromHeader.reducer)
  ]
})
export class HeaderModule { }
