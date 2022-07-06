import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

const UserItem = ({name, avatarURL, onPress, isSelected = false}) => {
  const selectedStyle = isSelected
    ? {
        transform: [
          {
            scale: 1.1,
          },
        ],
      }
    : {};

  const selectedImageStyle = isSelected
    ? {
        borderWidth: 2,
        borderColor: Colors.green,
        transform: [
          {
            scale: 1.3,
          },
        ],
      }
    : {
        borderWidth: 2,
        borderColor: 'white',
      };
  return (
    <TouchableOpacity
      style={[styles.container, selectedStyle]}
      onPress={onPress}>
      <Image
        style={[styles.avatar, selectedImageStyle]}
        source={{uri: avatarURL}}
      />
      <Text
        style={{
          fontSize: 12,
          marginTop: 5,
          color: isSelected ? Colors.green : 'white',
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 50,
    resizeMode: 'cover',
  },
});
