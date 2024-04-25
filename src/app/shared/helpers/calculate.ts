import { ProductToCart } from "../models/product.interface";

export  function CalculateSubtotal(products: ProductToCart[]): number{
    let total:number=0;
    products.map(prod =>{
      total=total+ parseFloat(prod.price.toString())
    });

    return total;
  }