import "react-native-gesture-handler";
import React from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { enableScreens } from "react-native-screens";
import Main from "@navigation/Main";
// import createSagaMiddleware from 'redux-saga';
// import { render } from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import { logger } from 'redux-logger';
// import reducer from './src/reducers';
// import rootSaga from './src/sagas';

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
// sagaMiddleware.run(rootSaga);

enableScreens();

AppRegistry.registerComponent(appName, () => Main);
