import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderOne from "../wrappers/header/HeaderOne";
import FooterTwo from "../wrappers/footer/FooterTwo";
import HeaderTwo from "../wrappers/header/HeaderTwo";
import HeaderThree from "../wrappers/header/HeaderThree";
import HeaderFour from "../wrappers/header/HeaderFour";
import HeaderFive from "../wrappers/header/HeaderFive";
import HeaderSix from "../wrappers/header/HeaderSix";
import FooterOne from "../wrappers/footer/FooterOne";
import FooterThree from "../wrappers/footer/FooterThree";
import FooterFour from "../wrappers/footer/FooterFour";

const LayoutNine = ({
  children,
  headerContainerClass,
  headerTop,
  headerBorderStyle,
  headerPaddingClass
}) => {
  return (
    <Fragment>
      <HeaderFour
        layout={headerContainerClass}
        top={headerTop}
        borderStyle={headerBorderStyle}
        headerPaddingClass={headerPaddingClass}
      />
      {children}
      <FooterTwo
        footerTopSpaceTopClass="pt-80"
        spaceBottomClass="pb-25"
        footerLogo="/assets/img/logo/logo-2.png"
        backgroundImage="/assets/img/bg/footer-bg.jpg"
      />
    </Fragment>
  );
};

LayoutNine.propTypes = {
  children: PropTypes.any,
  headerBorderStyle: PropTypes.string,
  headerContainerClass: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerTop: PropTypes.string
};

export default LayoutNine;
