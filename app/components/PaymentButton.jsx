'use client';
import React, { Suspense, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/app/loading';
// import { useSession } from 'next-auth/react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const PaymentButton = ({ amount }) => {
  //   const { userData } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const makePayment = async () => {
    setIsLoading(true);

    // make an endpoint to get this key
    const key = process.env.RAZORPAY_API_KEY;
    const data = await fetch('/api/order/create?amount=' + amount);
    const { order } = await data?.json();
    const options = {
      key: key,
      name: userData.user?.email,
      currency: order.currency,
      amount: order.amount,
      order_id: order.id,
      modal: {
        ondismiss: function () {
          setIsLoading(false);
        },
      },
      handler: async function (response) {
        const data = await fetch('/api/order/verify', {
          method: 'POST',
          body: JSON.stringify({
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
            email: userData.user?.email,
          }),
        });

        const res = await data.json();
        if (res?.error === false) {
          // redirect to success page
          router.push('/success');
        }
      },
      prefill: {
        email: userData.user?.email,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    paymentObject.on('payment.failed', function (response) {
      alert('Payment failed. Please try again.');
      setIsLoading(false);
    });
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="">
          <Button
            className={cn(buttonVariants({ size: 'lg' }))}
            disabled={isLoading}
            onClick={makePayment()}
          >
            Pay Now
          </Button>
        </div>
      </Suspense>
    </>
  );
};

export default PaymentButton;
