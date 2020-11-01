import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store/products.reducer';
import * as fromProductSelectors from '../../store/products.selectors';
import * as fromHeaderActions from '../../../header/store/header.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: any;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit(): void {

    this.products$ = this.store.pipe(select(fromProductSelectors.selectAllProduct));
  }


  addToCard(){
    this.store.dispatch(fromHeaderActions.addToCard())
  }

}
