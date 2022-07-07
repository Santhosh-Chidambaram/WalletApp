import React from 'react';
import {SafeAreaView} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CustomStatusbar from './src/components/CustomStatusbar';
import AppNavigator from './src/navigators/AppNavigator';
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <CustomStatusbar />
      <SafeAreaView style={{flex: 1}}>
        <AppNavigator />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
