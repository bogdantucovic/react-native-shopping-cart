import React, { Fragment, Component } from "react";
import { View, Text, FlatList, Switch, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import { THEME } from "../../config";
import { SwitchWrapper, ItemSeparator } from "./ProductsList.style";

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceHighToLow: this.props.isPriceHighToLow
    };
  }

  static defaultProps = {
    isPriceHighToLow: true
  };

  static propTypes = {
    isSortable: PropTypes.bool
  };

  handleChangeSortType = () => {
    this.setState(prevState => ({
      priceHighToLow: !prevState.priceHighToLow
    }));
  };

  getSortedList(list, priceHighToLow) {
    if (list.length) {
      if (priceHighToLow) {
        list.sort((a, b) => b.price - a.price);
      } else {
        list.sort((a, b) => a.price - b.price);
      }
    }
    return list;
  }

  render() {
    const { priceHighToLow } = this.state;
    const { isSortable, list } = this.props;
    const sortableList = this.getSortedList(list, priceHighToLow);
    const sortLabel = priceHighToLow ? "First expensive" : "First cheaper";

    return (
      <View>
        <SwitchWrapper>
          {isSortable && (
            <Fragment>
              <Switch
                tintColor={THEME.brandSuccess}
                selectedValue={priceHighToLow}
                onValueChange={val => {
                  this.handleChangeSortType();
                }}
              />
              <Text> {sortLabel} </Text>
            </Fragment>
          )}
        </SwitchWrapper>
        <Fragment>
          <FlatList
            extraData={priceHighToLow}
            data={sortableList}
            renderItem={({ item }) => (
              <Fragment>{this.props.children(item)}</Fragment>
            )}
            ItemSeparatorComponent={() => <ItemSeparator />}
            ListEmptyComponent={() => <ActivityIndicator />}
          />
        </Fragment>
      </View>
    );
  }
}

export default ProductsList;
