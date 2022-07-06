import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';

const FilledButton = ({onPress, label}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.FilledButton}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default FilledButton;

const styles = StyleSheet.create({
  FilledButton: {
    width: 160,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
});
