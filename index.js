/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './LoginScreen';
import homepage from './homepage';
AppRegistry.registerComponent(appName, () => homepage);
