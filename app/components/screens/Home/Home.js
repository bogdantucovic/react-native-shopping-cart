import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { SectionList } from "react-native";
import Product from "../../Product/Product";
import { productsDataSelector } from "../../Products/ProductsSelectors";
import { HomeStyled, SectionTitle } from "./Home.style";

class Home extends PureComponent {
  getMostExpensive(products) {
    return products.sort((a, b) => b.price - a.price).slice(0, 3);
  }

  getMostCheapest(products) {
    return products.sort((a, b) => a.price - b.price).slice(0, 3);
  }

  render() {
    const { productsData } = this.props;
    return (
      <HomeStyled>
        <SectionList
          sections={[
            {
              title: "Most expensive products",
              data: this.getMostExpensive(productsData)
            },
            {
              title: " Most cheapest products",
              data: this.getMostCheapest(productsData)
            }
          ]}
          renderSectionHeader={({ section: { title } }) => (
            <SectionTitle>{title}</SectionTitle>
          )}
          renderItem={({ item, index, section }) => <Product product={item} />}
        />
      </HomeStyled>
    );
  }
}

const mapStateToProps = state => ({
  productsData: productsDataSelector(state)
});

export default connect(
  mapStateToProps,
  null
)(Home);
