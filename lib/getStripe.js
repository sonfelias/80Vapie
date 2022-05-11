import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = async () => {
    if(!stripePromise){
        //stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
        stripePromise = await loadStripe('pk_test_51KwRgRKlHZexqoIJeNFfMFOSkOAcRF8TwOntbgfp3srZy5NEhJTJWZYe7Snemh8AxSQlQTYUAqaFFYwe31oujg0U00zzgwXde9');
    }
    return stripePromise;
}

export default getStripe;