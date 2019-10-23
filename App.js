/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './LoginScreen';
import Homepage from './homepage';
import SignUp from './SignUp';
import MangaDetail from './ManGaDetail';
import item from './itemManga';
const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Home: Homepage,
    SignUp: SignUp,
    Detail: MangaDetail,
    item: item,
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
