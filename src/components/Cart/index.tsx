import { CartButton } from "../CartButton";
import * as Dialog from "@radix-ui/react-dialog";
import {
  CartClose,
  CartContent,
  CartFooter,
  CartProduct,
  CartProductDetails,
  CartProductImage,
  Details,
} from "./styled";
import { X } from "phosphor-react";
import Image from "next/future/image";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";
import axios from "axios";

export function Cart() {
  const [isLoading, setIsLoading] = useState(false);
  const { cartItems, removeProductFromCart, cartTotal } = useCart();
  const cartQuantity = cartItems.length;

  const formatedCartTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cartTotal);

  async function handleCheckout() {
    try {
      setIsLoading(true);

      const response = await axios.post("/api/checkout", {
        products: cartItems,
      });

      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (error) {
      setIsLoading(false);
      alert("Erro ao redirecionar ao checkout");
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>
      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>

          <h2>Sacola de compras</h2>
          <section>
            {cartQuantity <= 0 && <p>Nenhum item na sacola</p>}
            {cartItems.map((item) => (
              <CartProduct key={item.id}>
                <CartProductImage>
                  <Image src={item.imageUrl} width={100} height={100} alt="" />
                </CartProductImage>
                <CartProductDetails>
                  <p>{item.name}</p>
                  <strong>{item.price}</strong>
                  <button onClick={() => removeProductFromCart(item.id)}>
                    Remover
                  </button>
                </CartProductDetails>
              </CartProduct>
            ))}
          </section>

          <CartFooter>
            <Details>
              <div>
                <span>Quantidade</span>
                <p>
                  {cartQuantity} {cartQuantity === 1 ? "item" : "itens"}
                </p>
              </div>
              <div>
                <span>Valor total</span>
                <p>{formatedCartTotal}</p>
              </div>
            </Details>
            <button onClick={handleCheckout}>Finalizar compra</button>
          </CartFooter>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
