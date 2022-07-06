import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import layoutStyles from '../../styles/layoutStyles';
import Colors from '../../constants/Colors';
import {ArrowBack, MoneyIcon} from '../../constants/SvgIcons';
import ContainedButton from '../../components/ContainedButton';
import OutlinedButton from '../../components/OutlinedButton';
import FilledButton from '../../components/FilledButton';

const RequestMoney = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  const renderHeaderView = (
    <View
      style={[
        layoutStyles.row,
        layoutStyles.alignCenter,
        styles.headerContainer,
      ]}>
      <TouchableOpacity
        onPress={goBack}
        style={{
          position: 'absolute',
          zIndex: 10,
          left: 0,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <ArrowBack />
        <Text style={{marginLeft: 5}}>Back</Text>
      </TouchableOpacity>
      <View style={[layoutStyles.fill, layoutStyles.alignCenter]}>
        <Text style={{fontSize: 18}}>New Request</Text>
      </View>
    </View>
  );

  const renderTransactionInfo = (
    <View
      style={[
        layoutStyles.alignCenter,
        {
          marginTop: 48,
        },
      ]}>
      <Text style={styles.name}>Adeleke Ramon</Text>
      <Text style={{color: 'white', fontSize: 12, marginBottom: 16}}>
        is requesting for:
      </Text>
      <View style={[layoutStyles.row, layoutStyles.alignCenter]}>
        <MoneyIcon color="white" />
        <Text
          style={{
            marginLeft: 5,
            fontSize: 40,
            color: 'white',
            fontWeight: '700',
          }}>
          200,000
        </Text>
      </View>
    </View>
  );
  return (
    <View style={[layoutStyles.fill, {padding: 20}]}>
      {renderHeaderView}
      <View
        style={{
          marginTop: 30,
          alignItems: 'center',
        }}>
        <View>
          <View style={styles.circleOuter}>
            <View style={styles.circle}>
              <Image
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/9454/159c/2a91c3a7bae8f15bdf37c5f3145a288d?Expires=1658102400&Signature=ESWq59MgZsgbq8gp2w6vg8gf7FiQKYDbqX4N6SXiJpbFls5BtuyHBIIuePG9ltOnsVViDn9fGEhqfyiphvogAFtxyrpg49NJbXCMr4EztBdNLf2j3jlzzRGlYJcCruqPjuVNHoveEFu8ujD39iaR-HOJUFWRZ3R0PL0aGL0JV~kAgM5y~pwPUnMvyq2GOuascZtr4YGSZ5TuSZhx5Z09R2ZwIf~U6liwynEjosO4L821hcBjN1oNMaJG9spImaJQ1WxIdU1Pvq~dsTIsRch2X4WX5VtVH4Dw2Eil-ipq95tBVQaoCkbYOrajZCVsITH--zCQw-sFa9GJlF6g4C66GQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100 / 2,
                  resizeMode: 'cover',
                }}
              />
            </View>
          </View>
        </View>
        {renderTransactionInfo}
        <View
          style={{
            marginTop: 50,
          }}>
          <FilledButton label={'Send money'} />
          <OutlinedButton label={"Don't send"} />
        </View>
      </View>
    </View>
  );
};

export default RequestMoney;

const styles = StyleSheet.create({
  name: {
    color: 'white',
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 16,
  },
  circle: {
    width: 140,
    height: 140,
    borderRadius: 140 / 2,
    backgroundColor: '#192259',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleOuter: {
    width: 180,
    height: 180,
    borderRadius: 180 / 2,
    backgroundColor: '#10194E',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});
