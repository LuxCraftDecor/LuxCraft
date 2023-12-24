// src/StripeContext.js
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OODqzHkxAlkXE3gQQZskkd1fuLEQocqBYYcg6Oe8QjTGXVcSfO0FUIxHp7wNFMs2FHw3HMUPdHriNwExcp1Hmzh00cl5apFup');

export default stripePromise;