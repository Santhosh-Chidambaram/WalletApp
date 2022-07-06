import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import Colors from '../../constants/Colors';
import ContainedButton from '../../components/ContainedButton';

const SelectedUserSheet = ({selectedItem}) => {
  const {avatarURL, name, number} = selectedItem;
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['40%'], []);

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
      handleStyle={{
        paddingTop: 20,
      }}
      style={styles.bottomSheetContainer}
      backgroundStyle={styles.backgroundStyle}>
      <View style={styles.contentContainer}>
        <Image
          source={{uri: avatarURL}}
          style={{
            height: 72,
            width: 72,
            borderRadius: 72 / 2,
            resizeMode: 'cover',
          }}
        />
        <Text style={{fontSize: 20, fontWeight: '500', marginTop: 8}}>
          {name}
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', marginTop: 10}}>
          (+234) 905 1694 275
        </Text>

        <ContainedButton
          label={'Continue'}
          style={{
            backgroundColor: '#FF2E63',
            paddingHorizontal: 34,
            paddingVertical: 16,
            marginTop: 25,
          }}
          textColor="white"
        />
      </View>
    </BottomSheet>
  );
};

export default SelectedUserSheet;

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
    paddingTop: 20,
    alignItems: 'center',
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
