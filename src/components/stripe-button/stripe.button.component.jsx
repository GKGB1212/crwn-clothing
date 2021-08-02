import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price * 100;
    const publicshableKey='pk_test_51JJqMYBWJcmnI3XgvMJEch0Imf6tMKcnfYBRnvlEOwPxO2uvF5dCi6aYACQs0H5s8EsZ55ZGFmWwhyTF5fzVCgBu002y1Tdbas'

    const onToken=token=>{
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
        label='Pay Now'
        name='Nike'
        billingAddress
        shippingAddress
        image='https://image.flaticon.com/icons/png/512/732/732229.png'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        token={onToken}
        stripeKey={publicshableKey}
        />
    )
}

export default StripeCheckoutButton;
