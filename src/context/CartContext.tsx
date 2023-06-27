import { createContext, useState } from "react";

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

interface CartContextData {
  cartItems: IProduct[];
  addProductToCart: (product: IProduct) => void;
  isInCart: (productId: string) => boolean;
  removeProductFromCart: (productId: string) => void;
  cartTotal: number;
}

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  const cartTotal = cartItems.reduce((total, product) => {
    return total + product.numberPrice;
  }, 0);

  function addProductToCart(product: IProduct) {
    setCartItems((state) => [...state, product]);
  }

  function removeProductFromCart(productId: string) {
    setCartItems((state) => state.filter((item) => item.id !== productId));
  }

  function isInCart(productId: string) {
    return cartItems.some((item) => item.id === productId);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addProductToCart,
        isInCart,
        removeProductFromCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
