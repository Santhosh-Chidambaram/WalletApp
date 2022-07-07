import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';

const OutlinedButton = ({onPress, label}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.outlinedButton}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default OutlinedButton;

const styles = StyleSheet.create({
  outlinedButton: {
    width: 155,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.buttonText1,
  },
});
