/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//Desabilitando mensagens amarelas de warning
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
