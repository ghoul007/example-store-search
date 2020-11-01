import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  search(query: string) {
    return this.http.get('assets/data/products.json').pipe(map(products => {
      return (products as any).filter(p => p.name.indexOf(query) > -1)
    }))
  }
}
