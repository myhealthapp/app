import React, { memo } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import ScatterChart from 'react-native-scatter-chart';
import InfoData from '@screens/GlucoseLevel/components/InformartionCard';
import colors from '@ultis/colors';
import FONTS from '@ultis/fonts/index';
import { scaleHeight, scaleWidth } from '@ultis/size';
import moment from 'moment';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import CalendarStrip1 from 'react-native-calendar-strip';
import SvgNotify from '@svgs/SvgNotify';

const screenWidth = Dimensions.get('window').width;
const chartData = [
  {
    color: '#F4B64D',
    name: 'a',
    opacity: 1,
    size: 7,
    unit: '%',
    values: [
      [0.8, 0],
      [1, 40],
    ],
  },
  {
    color: '#8B93FF',
    name: 'b',
    unit: '%',
    size: 7,
    opacity: 1,
    left: false,
    values: [
      [1.7, 70],
      [2.2, 80],
      [2.9, 120],
      [3.5, 140],
    ],
  },
  {
    color: '#Eb4b4b',
    name: 'c',
    unit: '%',
    opacity: 1,
    size: 7,
    values: [
      [4, 170],
      [4, 170],
      [5.5, 185],
      [5.5, 185],
    ],
  },
];
let datesWhitelist = [
  {
    start: moment().add(-10, 'days'), // total 11 days enabled
    end: moment(),
  },
];
let customDatesStyles = [];
const GlucoseLevel = memo(({ navigation }) => {
  for (let i = 0; i < 6; i++) {
    customDatesStyles.push({
      // Single date since no endDate provided
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
        <Text style={styles.txtHi}>Glucose Level</Text>
        <Text style={styles.txtToday}>{moment().format('MMMM')}</Text>
        <View style={styles.calenderView}>
          <CalendarStrip1
            calendarAnimation={{ type: 'sequence', duration: 30 }}
            daySelectionAnimation={{
              type: 'background',
              duration: 200,
              borderWidth: 2,
              borderHighlightColor: '#F4E6DB',
              highlightColor: '#F4E6DB',
            }}
            style={{ height: 80, paddingTop: 20, paddingBottom: 20 }}
            startingDate={moment().format('MM/DD/YYYY')}
            calendarHeaderStyle={{ color: 'red', height: 0, opacity: 0 }}
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
        <InfoData />
        <View style={styles.chart}>
          <ScatterChart
            backgroundColor="#ffffff"
            data={chartData}
            chartHeight={220}
            chartWidth={screenWidth - 70}
            horizontalLinesAt={[
              0,
              20,
              40,
              60,
              80,
              100,
              120,
              140,
              160,
              180,
              200,
            ]}
            unitY=""
            unitX="-2"
          />
        </View>
        <View style={styles.msgView}>
          <Text style={styles.icons}>
            <SvgNotify />
          </Text>
          <Text style={styles.description}>
            Check out our personalized recommendation and detailed reportby your
            food habits
          </Text>
        </View>
      </ScrollView>
    </View>
  );
});

export default GlucoseLevel;

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
    marginLeft: scaleWidth(22),
  },
  chart: {
    padding: scaleWidth(4),
    marginLeft: scaleWidth(20),
    marginRight: scaleWidth(20),
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
  contentContainerStyle: {
    paddingLeft: scaleWidth(16),
    marginBottom: scaleHeight(24),
  },
  calenderView: {
    marginLeft: scaleWidth(16),
    marginRight: scaleWidth(16),
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
    width: 50,
    fontsize: 70,
  },
  dateNumberStyle: {
    width: 50,
    fontsize: 70,
  },
  msgView: {
    backgroundColor: '#FFF7F1',
    flexDirection: 'row',
    marginTop: scaleHeight(24),
    marginLeft: scaleWidth(24),
    width: scaleWidth(330),
    padding: scaleWidth(16),
  },

  description: {
    fontFamily: FONTS.HIND.Regular,
    paddingLeft: scaleWidth(16),
    fontWeight: '300',
    fontSize: scaleHeight(13),
    lineHeight: scaleHeight(16),
    color: colors.newBlack,
    flex: 1,
    flexWrap: 'wrap',
  },
});
