import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = async () => {
    if(!stripePromise){
        //stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
        stripePromise = await loadStripe('pk_live_51KwRgRKlHZexqoIJJFDcIsmdeNzAbDKDKeDsTIGZhPKPpAqBl94bbDEU92TxCCA9ElucGUASOii6NGlwoQ6R1hMW00FufvGCRl');
    }
    return stripePromise;
}

export default getStripe;
