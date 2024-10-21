import React from "react";
import { BackgroundMainQuote } from "./BackgroundMainQuote";
import { QuoteForm } from "./QuoteForm";
import { MidWigetQuote } from "./MidWigetQuote";
import { GoogleMapQuote } from "./GoogleMapQuote";

import getQuoteContent from '../../assets/contents/getQuote'

export const GetQuote = () => {
  return (
    <div>
      <BackgroundMainQuote content={getQuoteContent.contentBackground} />
      <QuoteForm />
      <MidWigetQuote content={getQuoteContent.middleContent}/>
      <GoogleMapQuote />
    </div>
  );
};
