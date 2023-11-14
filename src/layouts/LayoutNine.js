import PropTypes from "prop-types";
import React, { Fragment } from "react";
import FooterTwo from "../wrappers/footer/FooterTwo";
import HeaderFour from "../wrappers/header/HeaderFour";

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
