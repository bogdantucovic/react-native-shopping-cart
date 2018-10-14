import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import { routerStyles } from "./App.style";
import { THEME } from "../../config";

import HomeScreen from "../screens/Home/Home";
import ProductsScreen from "../screens/Products/Products";
import ProductScreen from "../screens/ProductDetails/ProductDetails";
import CartScreen from "../screens/Cart/Cart";

const ProductsStack = createStackNavigator(
  {
    Products: {
      screen: ProductsScreen
    },
    Product: {
      screen: ProductScreen
    }
  },
  {
    navigationOptions: {
      headerTitleStyle: {
        color: THEME.brandSuccess
      }
    }
  }
);

const AppRouter = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Products: {
      screen: ProductsStack
    },
    Cart: {
      screen: CartScreen
    }
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      tabStyle: routerStyles.tabStyle,
      activeTintColor: THEME.brandSuccess
    }
  }
);

export default AppRouter;
