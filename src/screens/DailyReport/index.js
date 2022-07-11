import React, { memo, useCallback } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import FONTS from '@ultis/fonts/index';
import { scaleHeight, scaleWidth } from '@ultis/size';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import keyExtractor from '@ultis/keyExtractor';
import ReportData from '@screens/DailyReport/components/DataCard';

const INFORMATIONDATA = [
  {
    title: 'About',
    dateTime: '06/22/2022',
    description: [
      { title: 'Abnormal Heart Rate', result: '10:00 am - 10:08 am' },
      { title: 'Low Step Count', result: '1890 Steps' },
      { title: 'Less Sleep', result: '4:57 Min' },
    ],
  },
  {
    title: 'Address & Timing',
    dateTime: '06/23/2022',
    description: [{ title: 'All goods', result: 'No Attention Needed' }],
  },
  {
    title: 'Phone',
    dateTime: '06/24/2022',
    description: [
      { title: 'High Blood Pressure', result: '07:00 am - 08:22 am' },
      { title: 'High Stress', result: '07:00 am - 08:22 am' },
      { title: 'Water Consumption', result: 'No Data Available' },
    ],
  },
];

const DailyReport = memo(({ navigation }) => {
  const renderItem = useCallback(({ item }) => {
    const { title, dateTime, description } = item;
    return (
      <ReportData title={title} dateTime={dateTime} description={description} />
    );
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentStyle}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.txtHi}>Daily Report</Text>
        <Text style={styles.txtToday}>Needs Attention</Text>
      </ScrollView>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={INFORMATIONDATA}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        bounces={false}
      />
    </View>
  );
});

export default DailyReport;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  txtHi: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(30),
    lineHeight: scaleHeight(38),
    color: colors.semiBlack,
    marginLeft: scaleWidth(24),
  },
  txtToday: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '400',
    fontSize: scaleHeight(22),
    lineHeight: scaleHeight(30),
    color: colors.semiBlack,
    marginLeft: scaleWidth(24),
    marginBottom: scaleHeight(4),
  },
  contentContainerStyle: {
    paddingLeft: scaleWidth(16),
    marginBottom: scaleHeight(24),
  },
  contentContainerFlatList: {
    paddingBottom: scaleHeight(20),
  },
  header: {
    backgroundColor: colors.classicBlue,
    borderBottomLeftRadius: scaleWidth(16),
    borderBottomRightRadius: scaleWidth(16),
    height: getStatusBarHeight() + scaleHeight(55),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(17),
    color: colors.bluePrimary,
  },
  flexWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  contentStyle: {
    paddingTop: scaleHeight(107),
    paddingBottom: scaleHeight(40),
  },
});
