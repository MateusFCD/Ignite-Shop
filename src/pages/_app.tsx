import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from "../assets/logo.svg";
import bagImg from "../assets/bag.svg";
import { Container } from "../styles/pages/app";

import Image from "next/future/image";
import { CartProvider } from "use-shopping-cart";
import { Header } from "../components/Header";
import { CartContent } from "../components/Cart/styled";
import { CartContextProvider } from "../context/CartContext";

globalStyles();

function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header />

        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  );
}

export default App;
