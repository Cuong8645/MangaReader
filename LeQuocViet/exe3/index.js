/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import dsSinhVien from './danhsachSV';
import ManGaDetail from './ManGaDetail';

AppRegistry.registerComponent(appName, () => ManGaDetail);
