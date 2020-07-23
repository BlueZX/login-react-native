import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import Navigation from './src/navigation/navigation';

const store = configureStore();

export default App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
