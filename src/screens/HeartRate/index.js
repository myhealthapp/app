import React, { memo } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import FONTS from '@ultis/fonts/index';
import { scaleHeight, scaleWidth } from '@ultis/size';
import ScatterChart from 'react-native-scatter-chart';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import CalendarStrip from 'react-native-calendar-strip';

const screenWidth = Dimensions.get('window').width;

import moment from 'moment';

const chartData = [
  {
    color: '#EB3c3c',
    name: 'a',
    opacity: 1,
    unit: '%',
    size: 6,
    values: [
      [5, 90],
      [10, 90],
      [10, 91],
      [10, 92],
      [10, 93],
      [10, 94],
      [10, 95],
      [10, 96],
      [10, 110],
      [10, 111],
      [10, 112],
      [10, 113],
      [10, 114],
      [10, 115],
      [10, 116],
      [10, 110],
      [10, 131],
      [10, 132],
      [10, 133],
      [10, 134],
      [10, 135],
      [10, 136],
      [10, 137],
      [10, 138],
      [10, 139],
      [10, 140],
      [10, 145],
      [10, 146],
      [15, 101],
      [15, 102],
      [15, 103],
      [15, 104],
      [15, 105],
      [15, 106],
      [15, 110],
      [15, 111],
      [15, 112],
      [15, 113],
      [15, 114],
      [15, 115],
      [15, 116],
      [15, 110],
      [15, 121],
      [15, 122],
      [15, 123],
      [15, 124],
      [15, 125],
      [18, 111],
      [18, 112],
      [18, 113],
      [18, 114],
      [18, 115],
      [18, 116],
      [18, 120],
      [18, 121],
      [18, 122],
      [18, 123],
      [18, 124],
      [18, 125],
      [18, 126],
      [18, 130],
      [18, 141],
      [18, 142],
      [18, 143],
      [18, 144],
      [18, 145],
      [18, 146],
      [18, 147],
      [18, 148],
      [18, 149],
      [18, 150],
      [18, 151],
      [18, 152],
      [23, 70],
      [23, 71],
      [23, 72],
      [23, 73],
      [23, 74],
      [23, 75],
      [23, 76],
      [23, 77],
      [23, 78],
      [23, 79],
      [23, 80],
      [23, 81],
      [23, 82],
      [23, 94],
      [23, 95],
      [23, 96],
      [23, 97],
      [23, 98],
      [23, 99],
      [23, 90],
      [23, 91],
      [23, 92],
      [23, 93],
      [23, 98],
      [23, 99],
      [23, 100],
      [23, 101],
      [23, 102],
      [23, 103],
      [23, 114],
      [23, 105],
      [23, 106],
      [23, 107],
      [23, 108],
      [23, 109],
      [23, 110],
      [35, 180],
      [50, 55],
      [45, 50],
    ],
  },
];
let customDatesStyles = [];
const HeartRate = memo(({ navigation }) => {
  for (let i = 0; i < 6; i++) {
    customDatesStyles.push({
      dateNameStyle: styles.dateNameStyle,
      dateNumberStyle: styles.dateNumberStyle,
      dateContainerStyle: {
        backgroundColor: '#FFF7F1',
        width: 40,
        height: 40,
      },
    });
  }
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentStyle}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.txtHi}>Heart Rate</Text>
        <Text style={styles.txtToday}>June</Text>
        <View style={styles.calenderView}>
          <CalendarStrip
            calendarAnimation={{ type: 'sequence', duration: 30 }}
            daySelectionAnimation={{
              type: 'background',
              duration: 200,
              borderWidth: 2,
              borderHighlightColor: '#F4E6DB',
              highlightColor: '#F4E6DB',
            }}
            startingDate={moment().format('MM/DD/YYYY')}
            style={{ height: 80, paddingTop: 20, paddingBottom: 20 }}
            // calendarHeaderStyle={{ color: 'black', textAlign: 'left' }}
            calendarHeaderStyle={{ color: 'red', height: 0, opacity: 0 }}
            // calendarColor={'white'}
            customDatesStyles={customDatesStyles}
            dateNumberStyle={{ color: 'black', paddingBottom: 10 }}
            dateNameStyle={{ color: 'grey', paddingTop: 10 }}
            highlightDateNumberStyle={{ color: 'black' }}
            highlightDateNameStyle={{ color: 'black' }}
            scrollable={true}
            iconStyle={{ width: 0, height: 0 }}
            iconContainer={{ flex: 0 }}
          />
        </View>
        <View style={styles.chart}>
          <Text style={styles.txtBPM}>68-154 BPM</Text>
          <Text style={styles.txtFullDate}>
            {moment().format('dddd, MMM DD YYYY')}
          </Text>
          <ScatterChart
            backgroundColor="#fff7f1"
            data={chartData}
            chartHeight={270}
            chartWidth={screenWidth - 95}
            horizontalLinesAt={[60, 90, 120, 150, 180]}
            unitY=""
          />
        </View>
      </ScrollView>
    </View>
  );
});

export default HeartRate;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
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
  calenderView: {
    marginLeft: scaleWidth(22),
    marginRight: scaleWidth(22),
  },
  txtToday: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '400',
    fontSize: scaleHeight(22),
    lineHeight: scaleHeight(30),
    color: colors.semiBlack,
    marginLeft: scaleWidth(24),
    marginBottom: scaleHeight(10),
  },
  chart: {
    marginLeft: scaleWidth(24),
    padding: scaleWidth(16),
    marginRight: scaleWidth(20),
    backgroundColor: '#fff7f1',
    borderRadius: scaleWidth(12),
    flex: 1,
  },
  txtBPM: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '500',
    fontSize: scaleHeight(28),
    lineHeight: scaleHeight(36),
    color: colors.semiBlack,
    marginTop: scaleWidth(20),
  },
  txtFullDate: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '300',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: colors.semiBlack,
    marginBottom: scaleHeight(24),
  },
  contentContainerStyle: {
    paddingLeft: scaleWidth(16),
    marginBottom: scaleHeight(24),
  },
  header: {
    backgroundColor: colors.classicBlue,
    borderBottomLeftRadius: scaleWidth(16),
    borderBottomRightRadius: scaleWidth(16),
    height: getStatusBarHeight() + scaleHeight(55),
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentStyle: {
    paddingTop: scaleHeight(107),
    paddingBottom: getBottomSpace() + scaleHeight(90),
  },
  dateNameStyle: {
    width: 55,
    fontsize: 70,
  },
  dateNumberStyle: {
    width: 55,
    fontsize: 70,
  },
});
