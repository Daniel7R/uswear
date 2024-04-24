import { Injectable, inject } from '@angular/core';
import { Firestore, getDocs, collection, addDoc, query, DocumentData, where, doc, updateDoc, limit } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { ProductInventory } from '../models/product.interface';

const PATH= `products`

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private firestore=inject(Firestore)
  constructor() { }
    /**
 * Executes the query and inserts a new Doc.
 *
 * Note: `addDoc()` attempts to provide up-to-date data when possible by
 * waiting for data from the server, but it may return cached data or fail if
 * you are offline and the server cannot be reached. To specify this behavior,
 * @returns A `Promise` that will be resolved with the results of the query with all the products.
 */
  addProduct(product: ProductInventory) {
    const docRef = addDoc(collection(this.firestore, 'products'), product);
    return from(docRef)
  }

  setProductId(idProduct:string){
    const document= doc(this.firestore,PATH,idProduct)
    const docRef= updateDoc(document, {id: idProduct})

    return docRef
  }
  updateProductStatus(idProduct:string, newStatus: string){
    const document= doc(this.firestore,PATH,idProduct)
    const docRef= updateDoc(document, {inventoryStatus: newStatus})

    return docRef
  }
  /**
 * Executes the query and returns the results as a `QuerySnapshot`.
 *
 * Note: `getDocs()` attempts to provide up-to-date data when possible by
 * waiting for data from the server, but it may return cached data or fail if
 * you are offline and the server cannot be reached. To specify this behavior,
 * @returns A `Promise` that will be resolved with the results of the query with all the products.
 */
  async getProducts(statuses?: string[]): Promise<Observable<DocumentData>>{
    let querySnapshot=(await getDocs(query(collection(this.firestore, 'products'))))
    if(statuses!== undefined && statuses?.length>0){
      querySnapshot=(
        await getDocs(
          query(
            collection(this.firestore, 'products'), 
            where('inventoryStatus', 'in', statuses))));
    }

    const data= querySnapshot.docs.map(products=> products.data())
    return from([data])
  }

  async getProductsWithLimit(limite: number,statuses?: string[]): Promise<Observable<DocumentData>>{
    let querySnapshot=(await getDocs(query(collection(this.firestore, 'products'),limit(limite))))
    if(statuses!== undefined && statuses?.length>0){
      querySnapshot=(
        await getDocs(
          query(
            collection(this.firestore, 'products'), 
            where('inventoryStatus', 'in', statuses))));
    }

    const data= querySnapshot.docs.map(products=> products.data())
    return from([data])
  }
}
