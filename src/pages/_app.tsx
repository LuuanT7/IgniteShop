import type { AppProps } from "next/app";
import Image from "next/image";
import { globalStyles } from "../styles/global";
import logoImg from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <a href={'/'}>
         <Image src={logoImg} alt='logo'/> 
        </a>
        <div/>
        <button>
          Login
        </button>
        <button>
          Sign Up!
        </button>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
