import React, { PureComponent } from "react";
import { withNavigation } from "react-navigation";
import AddToCart from "../Cart/AddToCart";
import Gallery from "../Gallery";
import {
  ProductStyled,
  PriceStyled,
  TitleStyled,
  ProductLink
} from "./Product.style";

class Product extends PureComponent {
  render() {
    const { product, navigation } = this.props;
    return (
      <ProductStyled>
        <Gallery images={product.images} title={product.title} />
        {!navigation.getParam("id") && (
          <ProductLink
            onPress={() => {
              navigation.navigate("Product", { id: product.id });
            }}
          >
            <TitleStyled>{product.title}</TitleStyled>
          </ProductLink>
        )}

        <PriceStyled> {product.price} RSD </PriceStyled>
        {this.props.desc &&
          this.props.desc(product.description, product.category)}

        {this.props.quantity && this.props.quantity(product.id)}
        <AddToCart product={product} />
      </ProductStyled>
    );
  }
}

export default withNavigation(Product);
