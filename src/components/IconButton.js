import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';

const IconButton = ({children, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {children}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    backgroundColor: Colors.buttonLight,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
