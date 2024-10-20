import React from "react";
import { BackgroundMainQuote } from "./BackgroundMainQuote";
import { QuoteForm } from "./QuoteForm";
import { MidWigetQuote } from "./MidWigetQuote";
import { GoogleMapQuote } from "./GoogleMapQuote";

export const GetQuote = () => {
  return (
    <div>
      <BackgroundMainQuote />
      <QuoteForm />
      <MidWigetQuote />
      <GoogleMapQuote />
    </div>
  );
};
