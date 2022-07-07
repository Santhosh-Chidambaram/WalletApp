import {
  Animated,
  Dimensions,
  FlatList,
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
import textStyles from '../../styles/textStyles';
import {ExpandingDot} from 'react-native-animated-pagination-dots';

const DATA = [
  {
    id: 0,
    title: 'Transfer That is Safe',
    content: 'You have nothing to be scared \n about, we got you covered',
  },
  {
    id: 1,
    title: 'Transfer That is Safe',
    content: 'You have nothing to be scared \n about, we got you covered',
  },
  {
    id: 2,
    title: 'Transfer That is Safe',
    content: 'You have nothing to be scared \n about, we got you covered',
  },
];

const IntroScreen = ({navigation}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const navigateToHome = () => {
    navigation.navigate(Routes.HomeScreen);
  };
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          width: 240,
          justifyContent: 'space-between',
          marginRight: 3,
        }}>
        <Text
          style={{
            ...textStyles.heading,
          }}>
          {item.title}
        </Text>
        <Text style={{...textStyles.subHeading, marginBottom: 14}}>
          {item.content}
        </Text>
        <TouchableOpacity style={styles.containedBtn} onPress={navigateToHome}>
          <Text style={{...textStyles.textMd, color: 'black'}}>
            Start banking
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={layoutStyles.fill}>
      <View style={styles.background}>
        <IntroBg />
      </View>

      <View style={styles.bottomCard}>
        <View style={styles.dotContainer}>
          <ExpandingDot
            data={DATA}
            expandingDotWidth={30}
            scrollX={scrollX}
            inActiveDotColor={'#FDD590'}
            activeDotColor={'#FFB129'}
            inActiveDotOpacity={1}
            dotStyle={styles.dotStyle}
          />
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          data={DATA}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          renderItem={renderItem}
        />
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
  dotContainer: {
    height: 20,
    paddingLeft: 60,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
});
