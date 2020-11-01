import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../../store/header.reducer';
import * as fromHeaderSelector from '../../store/header.selectors';
import * as fromHeaderActions from '../../store/header.actions';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime, map, tap } from "rxjs/operators"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  count$: Observable<number>;
  search: FormControl;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit(): void {

    this.search = new FormControl(undefined);
    this.search.valueChanges.pipe(
      debounceTime(200),
      tap(val => {
        console.log(val);
      })).subscribe(val=> this.store.dispatch(fromHeaderActions.addToCard()))
    this.count$ = this.store.pipe(select(fromHeaderSelector.selectHeaderCount))
  }

}
