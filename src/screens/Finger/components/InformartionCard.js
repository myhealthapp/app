import React, { memo, useCallback } from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts';

interface Props {
  title?: string;
  description?: any;
  dateTime?: string;
}

const InformartionCard = memo((props: Props) => {
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
    borderRadius: scaleWidth(8),
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
    marginTop: scaleHeight(16),
    backgroundColor: '#F4F9FC',
  },
  contentView: {
    flexDirection: 'column',
    padding: scaleHeight(12),
    marginRight: scaleHeight(12),
  },
});
