import React from 'react';
import {StackNavigator} from 'react-navigation';
import {createLoginNavigator} from './LoginNavigator';
import EmptyPage from '../pages/EmptyPage';

export default StackNavigator({
    Root: {
      screen: ({screenProps}) => React.createElement(createLoginNavigator(screenProps.authState))
    },
    Test: {screen: EmptyPage}
  }, {
    navigationOptions: {
      header: null
    }
  }
);