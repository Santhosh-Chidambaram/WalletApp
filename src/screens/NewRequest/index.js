import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import layoutStyles from '../../styles/layoutStyles';
import Colors from '../../constants/Colors';
import {ArrowBack} from '../../constants/SvgIcons';
import USERS from './users';
import UserItem from './UserItem';
import SelectedUserSheet from './SelectedUserSheet';

const {width} = Dimensions.get('screen');

const size = width - 150;
const symbolSize = 75;
const radius = size / 2;
const center = radius;

const NewRequest = ({navigation}) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const [positions, setPositions] = useState([]);

  const goBack = () => {
    navigation.goBack();
  };

  function degToRad(deg) {
    return (deg * Math.PI) / 180;
  }

  function getAngleRad(angle) {
    const angleRad = degToRad(angle);
    const x = radius * Math.cos(angleRad) + center - symbolSize / 2;
    const y = radius * Math.sin(angleRad) + center - symbolSize / 2;
    return {
      x,
      y,
    };
  }

  useEffect(() => {
    setPositions([275, 560, 33, 85, 150, -25].map(deg => getAngleRad(deg)));
  }, []);

  const renderHeaderView = (
    <View
      style={[
        layoutStyles.row,
        layoutStyles.alignCenter,
        styles.headerContainer,
      ]}>
      <TouchableOpacity
        onPress={goBack}
        style={[layoutStyles.row, layoutStyles.alignCenter, {marginRight: 15}]}>
        <ArrowBack />
        <Text style={{marginLeft: 5}}>Back</Text>
      </TouchableOpacity>
      <View style={layoutStyles.fill}>
        <TextInput
          value={searchText}
          onChangeText={txt => {
            const searchUser = USERS.find(user =>
              user.name.toLowerCase().startsWith(txt.toLowerCase()),
            );
            setSelectedItem(USERS.indexOf(searchUser));
            setSearchText(txt);
          }}
          style={[styles.search, isFocused ? styles.borderGreen : {}]}
          selectionColor={Colors.received}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </View>
    </View>
  );

  return (
    <View style={layoutStyles.fill}>
      {renderHeaderView}
      <View
        style={{
          paddingTop: 20,
          paddingLeft: 20,
        }}>
        <View style={styles.circleOuter2}>
          <View style={styles.circleOuter1}>
            {positions.length > 0 &&
              USERS.map((user, idx) => {
                return (
                  <View
                    style={{
                      position: 'absolute',
                      left: positions[idx].x - idx * 2,
                      top: positions[idx].y + idx * 2,
                      zIndex: idx + 1,
                    }}>
                    <UserItem
                      {...user}
                      isSelected={selectedItem === idx}
                      key={'user-item' + idx}
                      onPress={() => setSelectedItem(idx)}
                    />
                  </View>
                );
              })}
            <View style={styles.circleCenter}></View>
          </View>
        </View>
      </View>
      <SelectedUserSheet selectedItem={USERS[selectedItem]} />
    </View>
  );
};

export default NewRequest;

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  search: {
    height: 48,
    width: '96%',
    backgroundColor: Colors.backgroundLight,
    borderRadius: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: Colors.backgroundLight,
  },
  borderGreen: {
    borderColor: Colors.received,
  },
  circleCenter: {
    width: width - 220,
    height: width - 220,
    borderRadius: width - 220 / 2,
    borderWidth: 1,
    borderColor: Colors.circleBorder,
  },
  circleOuter1: {
    width: width - 130,
    height: width - 130,
    borderRadius: width - 130 / 2,
    borderWidth: 1,
    borderColor: Colors.circleBorder,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleOuter2: {
    width: width - 40,
    height: width - 40,
    borderRadius: width - 40 / 2,
    borderWidth: 1,
    borderColor: Colors.circleBorder,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
