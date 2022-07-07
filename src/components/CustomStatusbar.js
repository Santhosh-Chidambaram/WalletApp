import {StyleSheet, Platform, StatusBar} from 'react-native';
import React from 'react';
import {NativeModules} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const CustomStatusbar = () => {
  if (Platform.OS === 'android') {
    return <StatusBar backgroundColor={'#010A43'} barStyle="light-content" />;
  }
  return (
    <SafeAreaView
      style={[{backgroundColor: '#010A43', height: STATUSBAR_HEIGHT}]}>
      <StatusBar
        translucent={translucent}
        backgroundColor={barColor}
        barStyle={barStyle}
      />
    </SafeAreaView>
  );
};

export default CustomStatusbar;

const styles = StyleSheet.create({});
