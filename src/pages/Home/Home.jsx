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

import  homeContent from '../../assets/contents/home' 


export const Home = () => {

  return (
    <div>
      <BackgroundMain content={homeContent.contentBackground} />
      <BoxComponent content={homeContent.boxComponentContent} />
      <MidWidget content={homeContent.midWidgetConent} />
      <SmallBoxComponent content={homeContent.SmallBoxComponentConent} />
      <GreenWidget content={homeContent.greenWidgetContent} />
      <RectBoxTop />
      <BottomWidget content={homeContent.bottomWidgetContent} />
      <RectBoxBottom />
      <BrandWidget content={homeContent.brandWidgetContent}/>
    </div>
  );
};
