import Image from "next/image";
import { ImageContainer, SuccessContainer } from "../../styles/pages/success";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import Head from "next/head";

interface SuccessProps {
  customerName: string;
  product :{
    name: string;
    imageUrl: string;
  }
}


export default function Success({product, customerName}: SuccessProps){
  return(
    <>   
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name='robots' content="noIndex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <ImageContainer>
          <Image src={product.imageUrl} alt='' height={110} width={120}/>
        </ImageContainer> 

        <p> 
          Uhuuuul!!! <strong>{customerName}</strong>, sua <strong>{product.name}</strong> ja está a caminho da sua casa.
        </p>

        <Link href={'/'}>
          Voltar ao catalogo.
        </Link>
      </SuccessContainer>
    </>

  )}
  
    export const getServerSideProps: GetServerSideProps = async ({query}) =>{

    if(!query.sessionId){
      return {
        redirect: {
          destination: '/',
          permanent: false,
        }
      }
    }   

    const sessionId = String(query.session_id);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'line_items.data.price.product' ]
    });
    

    const customerName = session.customer_details.name;
    const product = session.line_items?.data[0].price.product as Stripe.Product;

    return {
      props:{
        customerName,
        product: {
          name: product.name,
          imageUrl: product.images[0],
        }

      }
    }
  }