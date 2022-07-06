import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PaymentStatusTag from '../../components/PaymentStatusTag';
import {MoneyIcon} from '../../constants/SvgIcons';
import Colors from '../../constants/Colors';
const isEven = num => num % 2;

const TransactionItem = ({avatarURL, name, paymentStatus, amount, index}) => {
  const cardBgColor = isEven(index) ? '#10194E' : '#192259';
  return (
    <View style={[styles.cardContainer, {backgroundColor: cardBgColor}]}>
      <View>
        <Image
          style={styles.avatar}
          source={{
            uri: avatarURL,
          }}
        />
      </View>
      <View style={styles.rowSb}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <PaymentStatusTag paymentStatus={paymentStatus} />
        </View>
        <View style={styles.rowCenter}>
          <MoneyIcon
            height={12}
            width={16}
            color={Colors[paymentStatus.toLowerCase()]}
          />
          <Text
            style={{marginLeft: 5, color: Colors[paymentStatus.toLowerCase()]}}>
            {amount}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
  },
  rowSb: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 50,
    marginRight: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#858EC5',
    marginBottom: 4,
  },
});
