
import {Stripe, } from "stripe";

const stripeSecret = process.env.STRIPE_SECRET_KEY!

export const stripe = new Stripe(stripeSecret, {
  apiVersion: '2022-11-15',
  appInfo: {
    name:'Ignite Shop'
  }
});
