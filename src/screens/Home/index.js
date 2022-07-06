import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import layoutStyles from '../../styles/layoutStyles';
import {HammenuIcon, MoneyIcon} from '../../constants/SvgIcons';
import IconButton from '../../components/IconButton';
import ContainedButton from '../../components/ContainedButton';
import OutlinedButton from '../../components/OutlinedButton';
import TransactionBSheet from './TransactionBSheet';
import Routes from '../../navigators/Routes';

const HomeScreen = ({navigation}) => {
  const navigateToNewRequest = () => {
    navigation.navigate(Routes.NewRequest);
  };

  const navigateToRequestMoney = () => {
    navigation.navigate(Routes.RequestMoney);
  };

  const renderBalanceView = (
    <View
      style={{
        marginTop: 48,
      }}>
      <Text style={{color: 'white', fontSize: 12, marginBottom: 16}}>
        Your current balance is
      </Text>
      <View style={styles.row}>
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

  const renderHeader = (
    <View style={[styles.row, {marginTop: 24}]}>
      <View style={[styles.row, layoutStyles.fill]}>
        <IconButton>
          <HammenuIcon />
        </IconButton>
        <Text style={{fontSize: 18, color: 'white', marginLeft: 15}}>
          Hello Sandra,
        </Text>
      </View>
      <ContainedButton label={'Add money'} />
    </View>
  );

  const renderActionButtons = (
    <View style={styles.rowSb}>
      <OutlinedButton
        label={'Request money'}
        onPress={navigateToRequestMoney}
      />
      <OutlinedButton label={'Send money'} onPress={navigateToNewRequest} />
    </View>
  );

  return (
    <View
      style={[
        layoutStyles.fill,
        {
          paddingHorizontal: 16,
        },
      ]}>
      {renderHeader}
      {renderBalanceView}
      {renderActionButtons}
      <TransactionBSheet />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowSb: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
