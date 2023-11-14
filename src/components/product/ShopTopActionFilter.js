import PropTypes from "prop-types";
import React, { Fragment } from "react";
import ShopTopFilter from "./ShopTopFilter";
import { toggleShopTopFilter } from "../../helpers/product";

const ShopTopActionFilter = ({
  getFilterSortParams,
  productCount,
  sortedProductCount,
  products,
  getSortParams
}) => {
  return (
    <Fragment>
      <div className="shop-top-bar mb-35">
        <div className="select-shoing-wrap">
          <div className="shop-select">
            <select
              onChange={e => getFilterSortParams("filterSort", e.target.value)}
            >
              <option value="default">Default</option>
              <option value="priceHighToLow">Price - High to Low</option>
              <option value="priceLowToHigh">Price - Low to High</option>
            </select>
          </div>
        <div className="filter-active" onClick={e => toggleShopTopFilter(e)}>
            <span style={{marginRight: '10px'}}>Filter</span>
            <i class="fa fa-sliders" aria-hidden="true"></i>
        </div>
        </div>
          <p className="showing-text">
            Showing {sortedProductCount} of {productCount} result
          </p>

      </div>

      {/* shop top filter */}
      <ShopTopFilter products={products} getSortParams={getSortParams} />
    </Fragment>
  );
};

ShopTopActionFilter.propTypes = {
  getFilterSortParams: PropTypes.func,
  getSortParams: PropTypes.func,
  productCount: PropTypes.number,
  products: PropTypes.array,
  sortedProductCount: PropTypes.number
};

export default ShopTopActionFilter;
