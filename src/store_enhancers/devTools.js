import React from 'react';
import { createStore as initialCreateStore, compose } from 'redux';

export let createStore = initialCreateStore;
console.log('__DEV__:', __DEV__);
//if (__DEV__) {
if (1==0) {
  createStore = compose(
    require('redux-devtools').createDevTools(),
    require('redux-devtools').persistState(
      window.location.href.match(/[?&]debug_session=([^&]+)\b/)
    ),
    createStore
  );
}

export function renderDevTools(store) {
  //if (__DEV__) {
  if (1==0) {
    let {DevTools, DebugPanel, LogMonitor} = require('redux-devtools/lib');
    return (
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    );
  }
  return null;
}
