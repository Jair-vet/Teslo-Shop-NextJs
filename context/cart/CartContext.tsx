import { createContext } from 'react';
// import { ShippingAddress } from './';
import { ICartProduct } from '../../interfaces';


interface ContextProps {
    cart: ICartProduct[];

    // Methos
    addProductToCart: (product: ICartProduct) => void;
    updateCartQuantity: (product: ICartProduct) => void;
    removeCartProduct: (product: ICartProduct) => void;
    // updateAddress: (address: ShippingAddress) => void;
}


export const CartContext = createContext({} as ContextProps );