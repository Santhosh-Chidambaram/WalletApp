import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import layoutStyles from '../../styles/layoutStyles';
import {IntroBg} from '../../constants/SvgIcons';
import Colors from '../../constants/Colors';
import Routes from '../../navigators/Routes';

const IntroScreen = ({navigation}) => {
  const navigateToHome = () => {
    navigation.navigate(Routes.HomeScreen);
  };
  return (
    <View style={layoutStyles.fill}>
      <View style={styles.background}>
        <IntroBg />
      </View>
      <View style={styles.bottomCard}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: '700',
            marginBottom: 6,
          }}>
          Transfer That is Safe
        </Text>
        <Text style={{color: 'white', fontSize: 16, marginBottom: 14}}>
          You have nothing to be scared {'\n'}about, we got you covered
        </Text>
        <TouchableOpacity style={styles.containedBtn} onPress={navigateToHome}>
          <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
            Start banking
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  bottomCard: {
    width: Dimensions.get('screen').width - 60,
    height: 200,
    backgroundColor: Colors.card,
    borderTopRightRadius: 50,
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 20,
  },
  containedBtn: {
    backgroundColor: 'white',
    width: 145,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
