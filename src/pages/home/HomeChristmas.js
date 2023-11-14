import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutNine from "../../layouts/LayoutNine";
import HeroSliderThirtyThree from "../../wrappers/hero-slider/HeroSliderThirtyThree";
import BannerThirtyTwo from "../../wrappers/banner/BannerThirtyTwo";
import TabProductEleven from "../../wrappers/product/TabProductEleven";
import CountDownSix from "../../wrappers/countdown/CountDownSix";
import TestimonialThree from "../../wrappers/testimonial/TestimonialThree";
import NewsletterThree from "../../wrappers/newsletter/NewsletterThree";
import TabProductFifteen from "../../wrappers/product/TabProductFifteen";
import CountDownFive from "../../wrappers/countdown/CountDownFive";
import CountDownFour from "../../wrappers/countdown/CountDownFour";
import CountDownThree from "../../wrappers/countdown/CountDownThree";
import CountDownTwo from "../../wrappers/countdown/CountDownTwo";
import CountDownOne from "../../wrappers/countdown/CountDownOne";
import CountDownSeven from "../../wrappers/countdown/CountDownSeven";
import CountDownEight from "../../wrappers/countdown/CountDownEight";

const HomeChristmas = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Glancea</title>
        <meta
          name="description"
          content="Christmas home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutNine
        headerContainerClass="container-fluid"
        headerBorderStyle="fluid-border"
        headerPaddingClass="header-padding-2"
      >
        {/* hero slider */}
        <HeroSliderThirtyThree />
        {/* banner */}
        {/* <BannerThirtyTwo spaceTopClass="pt-95" spaceBottomClass="pb-70" /> */}
        {/* tab product */}
        {/* tab product */}
        <TabProductFifteen
          category="christmas"
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          sectionTitle="Featured Products"
          bgColorClass="bg-gray-3"
          bgShape={true}
          colorClass="pro-puce-color"
        />
        {/* countdown */}
        <CountDownOne
          spaceTopClass="pt-95"
          spaceBottomClass="pb-95"
          dateTime="December 31, 2023 23:59:59"
          countDownImage="/assets/img/banner/deal-11.png"
        />
        {/* testimonial */}
        <TestimonialThree />
        {/* tab product */}
        <TabProductEleven
          category="christmas"
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          sectionTitle="Best Products"
          bgColorClass="bg-gray-3"
          bgShape={true}
          colorClass="pro-puce-color"
        />
        {/* newsletter */}
        <NewsletterThree
          spaceTopClass="pt-80"
          spaceBottomClass="pb-95"
          subscribeBtnClass="dark-red-subscribe"
        />
      </LayoutNine>
    </Fragment>
  );
};

export default HomeChristmas;
