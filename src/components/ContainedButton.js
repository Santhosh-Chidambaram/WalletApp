import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';

const ContainedButton = ({
  label,
  onPress,
  style = {},
  textColor = Colors.buttonText,
}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, {color: textColor}]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ContainedButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.buttonLight,
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.buttonText,
  },
});
