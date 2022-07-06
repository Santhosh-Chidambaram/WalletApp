import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import {FailedIcon, ReceivedIcon, SentIcon} from '../constants/SvgIcons';
const PaymentStatusTag = ({paymentStatus}) => {
  switch (paymentStatus) {
    case 'Received':
      return (
        <View style={styles.recevied}>
          <View style={styles.whiteBg}>
            <ReceivedIcon />
          </View>
          <Text style={styles.textStyle}>Received</Text>
        </View>
      );
    case 'Failed':
      return (
        <View style={styles.failed}>
          <View style={styles.whiteBg}>
            <FailedIcon />
          </View>
          <Text style={styles.textStyle}>Failed</Text>
        </View>
      );
    case 'Sent':
      return (
        <View style={styles.sent}>
          <View style={styles.whiteBg}>
            <SentIcon />
          </View>
          <Text style={styles.textStyle}>Sent</Text>
        </View>
      );

    default:
      return null;
  }
};

export default PaymentStatusTag;

const styles = StyleSheet.create({
  whiteBg: {
    marginRight: 5,
  },
  recevied: {
    width: 94,
    height: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.received,
    borderRadius: 20,
  },
  failed: {
    width: 75,
    height: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.failed,
    borderRadius: 20,
  },
  sent: {
    width: 65,
    height: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.sent,
    borderRadius: 20,
  },
  textStyle: {
    paddingBottom: 2,
  },
});
