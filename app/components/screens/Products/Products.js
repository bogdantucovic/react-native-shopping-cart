import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { productsDataSelector } from "../../Products/ProductsSelectors";
import ProductsList from "../../ProductsList/ProductsList";
import Product from "../../Product/Product";

class Products extends PureComponent {
  render() {
    const { productsData } = this.props;
    return (
      <View>
        <ProductsList list={productsData} isSortable>
          {product => <Product product={product} />}
        </ProductsList>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  productsData: productsDataSelector(state)
});

export default connect(
  mapStateToProps,
  null
)(Products);
