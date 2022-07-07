import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import Colors from '../../constants/Colors';
import textStyles from '../../styles/textStyles';
import TRANSACTIONS from './data';
import TransactionItem from './TransactionItem';
import {ArrowDown} from '../../constants/SvgIcons';
const TransactionBSheet = () => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['55%', '88%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      handleIndicatorStyle={styles.handleIndicatorStyle}
      style={styles.bottomSheetContainer}
      backgroundStyle={styles.backgroundStyle}>
      <View style={styles.contentContainer}>
        <View style={styles.sheetHeader}>
          <Text style={{...textStyles.subHeading, fontWeight: '500'}}>
            All Transactions
          </Text>

          <View style={styles.row}>
            <Text style={{marginRight: 10, color: Colors.textViolet}}>
              Sort by:
            </Text>
            <TouchableOpacity style={styles.row}>
              <Text style={textStyles.regular}>Recent</Text>
              <ArrowDown style={{marginTop: 3, marginLeft: 5}} />
            </TouchableOpacity>
          </View>
        </View>

        <BottomSheetFlatList
          data={TRANSACTIONS}
          renderItem={({item, index}) => (
            <TransactionItem {...item} index={index} />
          )}
        />
      </View>
    </BottomSheet>
  );
};

export default TransactionBSheet;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: Colors.backgroundLight,
    elevation: 10,
  },
  handleIndicatorStyle: {
    width: 65,
    height: 7,
    backgroundColor: '#4E589F',
  },
  backgroundStyle: {
    backgroundColor: 'transparent',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundLight,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  rowSb: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
