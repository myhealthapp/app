import React, { memo, useCallback } from 'react';
import { View, Text, Image } from 'react-native';
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
  const { data, ingredients } = props;
  const renderItem = useCallback((item) => {
    return data.map((item, index) => {
      return (
        <View style={styles.contentView}>
          <View style={{ ...styles.innerView, backgroundColor: item.color }}>
            <Text style={styles.icon}> {item.icon}</Text>
            <View>
              <Text style={styles.description}>{item.value}</Text>
            </View>
          </View>
          <Text style={styles.txtTitle}>{item.title}</Text>
        </View>
      );
    });
  }, []);

  const ingredientsItem = useCallback((item) => {
    return ingredients.map((item, index) => {
      return (
        <View style={styles.ingrBlock}>
          <View style={styles.details}>
            <Text style={styles.textValue}>{item.name}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.textValue}>{item.value}</Text>
          </View>
        </View>
      );
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.setRow}>{renderItem()}</View>
      <Text style={styles.heading}>Ingredients</Text>
      <View>{ingredientsItem()}</View>
    </View>
  );
});

export default InformartionCard;

const styles = ScaledSheet.create({
  container: {
    borderRadius: scaleWidth(8),
    marginLeft: scaleWidth(12),
    paddingHorizontal: scaleWidth(16),
    marginBottom: scaleHeight(16),
    textAlign: 'center',
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(20),
    color: colors.newBlack,
    paddingTop: scaleHeight(14),
    textAlign: 'center',
  },
  description: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '400',
    fontSize: scaleHeight(22),
    lineHeight: scaleHeight(28),
    color: colors.newBlack,
  },
  textValue: {
    fontWeight: '400',
    fontSize: scaleHeight(20),
    lineHeight: scaleHeight(24),
    color: colors.newBlack,
  },
  icon: {
    marginBottom: scaleHeight(12),
    width: scaleWidth(16),
  },
  setRow: {
    flexDirection: 'row',
    marginTop: scaleHeight(24),
    marginBottom: scaleHeight(24),
  },
  ingrBlock: {
    flexDirection: 'row',
    marginTop: scaleHeight(12),
    justifyContent: 'space-between',
  },
  details: {
    flexDirection: 'column',
  },

  contentView: {
    flexDirection: 'column',
    textAlign: 'center',
    marginRight: scaleHeight(14),
    justifyContent: 'center',
  },
  innerView: {
    padding: scaleHeight(16),
    minHieght: scaleHeight(80),
    borderRadius: scaleWidth(16),
  },

  heading: {
    fontWeight: '600',
    paddingTop: scaleHeight(6),
    paddingBottom: scaleHeight(6),
    fontSize: scaleHeight(28),
    lineHeight: scaleHeight(28),
    color: colors.semiBlack,
  },
});
