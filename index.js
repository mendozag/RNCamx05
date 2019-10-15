/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ViewPage from "./src/components/ViewPage";
import BasicFlatList  from "./src/components/BasicFlatList";
//import HelloFirebase from "./src/components/HelloFirebase";
import GetFirebase5 from "./src/components/GetFirebase5";
import CarreraDetail from "./src/components/CarreraDetail";

console.ignoredYellowBox = ['react-native BugReporting extraData:'];

AppRegistry.registerComponent(appName, () => CarreraDetail);
