import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import Product from "../../Product/Product";
import { productsDataSelector } from "../../Products/ProductsSelectors";
import { ProductDetailsStyled, DescStyled } from "./ProductDetails.style";

class ProductDetails extends Component {
  getProduct = () => {
    const { navigation, productsData } = this.props;
    return productsData.filter(el => el.id == navigation.getParam("id"))[0];
  };

  componentDidMount() {
    const title = this.getProduct().title;
    this.props.navigation.setParams({ title });
  }

  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: `${state.params.title}`
    };
  };

  render() {
    return (
      <ProductDetailsStyled>
        <Fragment>
          <Product
            product={this.getProduct()}
            desc={(description, category) => (
              <Fragment>
                <DescStyled>{description}</DescStyled>
              </Fragment>
            )}
          />
        </Fragment>
      </ProductDetailsStyled>
    );
  }
}

const mapStateToProps = state => ({
  productsData: productsDataSelector(state)
});

export default withNavigation(
  connect(
    mapStateToProps,
    null
  )(ProductDetails)
);
