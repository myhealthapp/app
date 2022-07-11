import React, { memo, useCallback } from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts';
import moment from 'moment';

interface Props {
  title?: string;
  description?: any;
  dateTime?: string;
}

const InformartionCard = memo((props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={{ ...styles.dot, backgroundColor: '#8B93FF' }} />
        <Text style={styles.range}>Within the Range</Text>
        <View style={{ ...styles.dot, backgroundColor: '#F4B64D' }} />
        <Text style={styles.range}>Below Normal Level</Text>
        <View style={{ ...styles.dot, backgroundColor: '#Eb4b4b' }} />
        <Text style={styles.range}>Above Normal Level</Text>
      </View>
      <View style={styles.setRow}>
        <View style={styles.contentView}>
          <Text style={styles.txtTitle}>Breakfast</Text>
          <View>
            <Text style={styles.description}> Omlet and Juice</Text>
          </View>
        </View>
        <View style={styles.contentView}>
          <Text style={styles.txtTitle}>Lunch</Text>
          <View>
            <Text style={styles.description}>Nachos, Fish Taco, Beer</Text>
          </View>
        </View>
        <View style={styles.contentView}>
          <Text style={styles.txtTitle}>Dinner</Text>
          <View>
            <Text style={styles.description}>Penne Formaggio</Text>
          </View>
        </View>
      </View>
    </View>
  );
});

export default InformartionCard;

const styles = ScaledSheet.create({
  container: {
    borderRadius: scaleWidth(12),
    paddingHorizontal: scaleWidth(16),
    marginBottom: scaleHeight(8),
    textAlign: 'center',
    padding: scaleHeight(8),
    marginLeft: scaleWidth(8),
    // marginRight: scaleWidth(8)
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(20),
    color: colors.newBlack,
  },
  description: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '300',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(14),
    color: colors.newBlack,
  },
  setRow: {
    flexDirection: 'row',
    marginTop: scaleHeight(8),
    backgroundColor: '#F4F9FC',
  },
  dot: {
    borderRadius: scaleWidth(100),
    width: scaleWidth(7),
    height: scaleHeight(7),
    marginTop: scaleHeight(10),
  },
  row: {
    flexDirection: 'row',
    marginTop: scaleHeight(8),
  },
  range: {
    padding: scaleHeight(7),
    fontWeight: '400',
    fontSize: scaleHeight(11),
    lineHeight: scaleHeight(14),
    color: colors.newBlack,
  },
  contentView: {
    flexDirection: 'column',
    padding: scaleHeight(12),
    marginRight: scaleHeight(6),
  },
});
