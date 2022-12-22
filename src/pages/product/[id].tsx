import Image from "next/image";
import {
  Container,
  DetailsContainer,
  ProductContainer,
} from "../../styles/pages/products";
import axio from "axios";

import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession]= useState(false)
  const { isFallback } = useRouter();

  if (isFallback) {
    return <strong>loading....</strong>;
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axio.post("/api/checkout", {
        priceId: product.defaultPriceId,
      });
      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      alert("Falha ao redirecionar ao checkout!");
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <Container>
        <ProductContainer>
          <Image src={product.imageUrl} alt="." height={480} width={520} />
        </ProductContainer>
        <DetailsContainer>
          <h1>{product.name}</h1>
          <strong>{product.price}</strong>
          <p>{product.description}</p>
          <button onClick={handleBuyProduct} disabled={isCreatingCheckoutSession}>Buy now!</button>
        </DetailsContainer>
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { id: "prod_N18ibTubPCJG5n" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}: any) => {
  const productId = params.id;
  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });
  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1,
  };
};

