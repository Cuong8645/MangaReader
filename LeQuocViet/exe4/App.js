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


import Login from './login';
import Homepage from './home';
import Detail from './detailPhim';
import itemP from './itemPhim';
import SignUp from './SignUp';

//import SignUp from './SignUp';

const RootStack = createStackNavigator(
  {
    Login: Login,
    Home: Homepage,
    Detail: Detail,
    itemP: itemP,
    itemP: itemP,
    SignUp: SignUp,
    //Detail: MangaDetail,
    //item: item,
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
