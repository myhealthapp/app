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

const DataCard = memo((props: Props) => {
  const { title, description, dateTime } = props;

  const renderItem = useCallback((item) => {
    return item.map((desc, index) => {
      return (
        <>
          <Text style={styles.txtTitle}>{desc.title}</Text>
          <View style={styles.contentView}>
            <Text style={styles.description} key={index}>
              {desc.result}
            </Text>
          </View>
        </>
      );
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.setRow}>
        <View style={styles.dateContent}>
          <Text style={styles.dayName}>
            {moment(dateTime, 'MM/DD/YYYY').format('ddd')?.charAt(0)}
          </Text>
          <View>
            <Text style={styles.month}>
              {moment(dateTime, 'MM/DD/YYYY').format('MMMM')}
            </Text>
            <Text style={styles.dayNumber}>
              {moment(dateTime, 'MM/DD/YYYY').format('DD')}
              <Text style={styles.txtSupper}>
                {moment(dateTime, 'MM/DD/YYYY').format('Do')?.substring(2, 4)}
              </Text>
            </Text>
          </View>
        </View>
        <View>{renderItem(description)}</View>
      </View>
    </View>
  );
});

export default DataCard;

const styles = ScaledSheet.create({
  container: {
    borderRadius: scaleWidth(8),
    paddingHorizontal: scaleWidth(16),
    marginBottom: scaleHeight(16),
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(29),
    color: colors.newBlack,
  },
  dayName: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(60),
    lineHeight: scaleHeight(77),
    color: colors.newBlack,
    width: scaleWidth(51),
  },
  dayNumber: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(22),
    lineHeight: scaleHeight(27),
    color: colors.newBlack,
    alignItems: 'flex-end',
    // flexDirection: 'row',
  },
  txtSupper: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '400',
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(24),
    color: colors.newBlack,
  },
  month: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '400',
    fontSize: scaleHeight(19),
    lineHeight: scaleHeight(24),
    color: colors.newBlack,
    textTransform: 'uppercase',
  },
  description: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '400',
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(24),
    color: colors.newBlack,
  },
  setRow: {
    flexDirection: 'row',
    marginBottom: scaleHeight(16),
  },
  dateContent: {
    flexDirection: 'row',
    marginRight: scaleWidth(30),
    width: '25%',
    justifyContent: 'center',
  },
  contentView: {
    flexDirection: 'column',
    marginBottom: scaleHeight(14),
  },
});
