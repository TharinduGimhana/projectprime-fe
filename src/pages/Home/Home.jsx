import React from "react";
import { BackgroundMain } from "./BackgroundMain";
import { BoxComponent } from "./BoxComponent";
import { MidWidget } from "./MidWidget";
import { SmallBoxComponent } from "./SmallBoxComponent";
import { GreenWidget } from "./GreenWidget";
import { RectBoxTop } from "./RectBoxTop";
import { BottomWidget } from "./BottomWidget";
import { RectBoxBottom } from "./RectBoxBottom";
import { BrandWidget } from "./BrandWidget";

export const Home = () => {
  return (
    <div>
      <BackgroundMain />
      <BoxComponent />
      <MidWidget />
      <SmallBoxComponent />
      <GreenWidget />
      <RectBoxTop />
      <BottomWidget />
      <RectBoxBottom />
      <BrandWidget />
    </div>
  );
};
