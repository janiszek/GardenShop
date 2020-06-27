import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Article } from './products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private productList: Article[];

  constructor() {
        this.productList = [
          {id: 1, name: 'Świerk', price: 550, vat: 23, amount: 53},
          {id: 2, name: 'Sosna', price: 650, vat: 23, amount: 23},
          {id: 3, name: 'Brzoza', price: 220, vat: 8, amount: 10},
          {id: 4, name: 'Jodła młoda', price: 75, vat: 23, amount: 15},
          {id: 4, name: 'Trawa', price: 75, vat: 0, amount: 230}
        ];
  }

  public getProducts(): Observable<Article[]> {
    console.log('Articles: simulating slow server response');
    // pipe(delay()) - symuluje opoznienie serwera
    return of(this.productList).pipe(delay(500));
  }

  public findById(id: number): Article{
    return this.productList.find((product) => product.id === id);
  }

  public addProduct(product: Article): void {
    this.productList.push(product);
  }

  public updateProduct(id: number, name: string, price: number, vat: number, amount: number): void {
    const index = this.productList.indexOf(this.productList.find((product) => product.id === id));
    if (index > -1){
      this.productList[index] = {id, name, price, vat, amount};
    }
  }

  public deleteProduct(id: number): void {
    const index = this.productList.indexOf(this.productList.find((product) => product.id === id));
    if (index > -1){
      this.productList.splice(index, 1);
    }
  }

}
