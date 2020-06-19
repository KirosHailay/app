import { Product } from './Product'
import { CartItem } from './CartItem';

export class Cart{

    items: [{
        productId: Product,
        qty: number,

    }]
    totalPrice: Number;
}
