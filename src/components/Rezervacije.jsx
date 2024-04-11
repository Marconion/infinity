import { React, useState } from "react";
import NavBar from "./Navbar";
import { Footer } from "./Footer";
import { Stack, Typography, Button } from "@mui/material";
import ActionBarComponentProps from "./Calendar";
import { loadStripe } from "@stripe/stripe-js";
import { motion } from "framer-motion";

export const Rezervacije = () => {
  const [paymentComplete, setPaymentComplete] = useState(false);

  // Initialize Stripe with your publishable key
  const stripePromise = loadStripe("YOUR_PUBLISHABLE_KEY");

  const handlePayment = async () => {
    const stripe = await stripePromise;
    // Call your server to create a PaymentIntent
    const response = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    const { clientSecret } = await response.json();
    // Confirm the payment with the clientSecret
    const result = await stripe.confirmCardPayment(clientSecret);
    if (result.error) {
      // Handle error
      console.error(result.error.message);
    } else {
      // Payment successful
      setPaymentComplete(true);

      // Send a WhatsApp message
      const accountSid = "your_Twilio_account_SID";
      const authToken = "your_Twilio_auth_token";
      const client = new Twilio(accountSid, authToken);

      client.messages
        .create({
          from: "whatsapp:+14155238886", // your Twilio number
          body: "Payment Successful!",
          to: "whatsapp:+381605220520", // your phone number
        })
        .then((message) => console.log(message.sid));
    }
  };
  return (
    <div>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}>
        <Stack
          direction="column"
          spacing={2}
          alignItems={"center"}
          py={5}
          mb={5}>
          <Typography variant="h3" sx={{ color: "secondary.main" }}>
            Rezervacije
          </Typography>
          <ActionBarComponentProps />
          <Stack direction="column" spacing={2} alignItems={"center"} pb={5}>
            {!paymentComplete && (
              <Button
                onClick={handlePayment}
                variant="contained"
                color="primary">
                Pay Now
              </Button>
            )}
            {paymentComplete && (
              <Typography variant="h4">Payment Successful!</Typography>
            )}
          </Stack>
        </Stack>
      </motion.div>
      <Footer />
    </div>
  );
};
