import React, { memo, useState, useCallback, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import FONTS from '@ultis/fonts/index';
import { scaleHeight, scaleWidth } from '@ultis/size';
import TopicItem from '@screens/MainPage/components/TopicItem';
import SvgNurse from '@svgs/SvgNurse';
import ServiceItem from '@screens/MainPage/components/ServiceItem';
import ROUTES from '@ultis/routes';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import AppleHealthKit from 'react-native-health';

const Permissions = AppleHealthKit.Constants.Permissions;

const TOPICDATA = [
  {
    color: colors.green,
    svg: <SvgNurse />,
    title: 'Stay Home\nCovid-19',
  },
  {
    color: colors.orange,
    svg: <SvgNurse />,
    title: 'Stay Home\nCovid-19',
  },
  {
    color: colors.classicBlue,
    svg: <SvgNurse />,
    title: 'Stay Home\nCovid-19',
  },
];

const MainPage = memo(({ navigation }) => {
  const [topicData, setTopicData] = useState(TOPICDATA);
  const [steps, setSteps] = useState(0);
  const [heartRate, setHeartRate] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const onFindDoctor = useCallback(() => {
    navigation.navigate(ROUTES.FindDoctors);
  }, [navigation]);

  const onFindHospital = useCallback(() => {
    navigation.navigate(ROUTES.FindHospital);
  }, [navigation]);

  const onAppointment = useCallback(() => {
    navigation.navigate(ROUTES.AppointmentList);
  }, [navigation]);

  const onPriceServices = useCallback(() => {
    navigation.navigate(ROUTES.PricePlan);
  }, [navigation]);

  const renderTopicItem = () => {
    return topicData.map((item, index) => {
      const { color, svg, title } = item;
      return <TopicItem svg={svg} title={title} color={color} key={index} />;
    });
  };
  const permissions = {
    permissions: {
      read: [
        Permissions.HeartRate,
        Permissions.Steps,
        Permissions.BodyMass,
        Permissions.BodyMassIndex,
        Permissions.Height,
      ],
    },
  };

  const getDetails = () => {
    /* Permission options */

    AppleHealthKit.initHealthKit(permissions, (error) => {
      /* Called after we receive a response from the system */

      if (error) {
        console.log('[ERROR] Cannot grant permissions!');
      }

      /* Can now read or write to HealthKit */

      var start = new Date();
      start.setUTCHours(0, 0, 0, 0);
      const options = {
        startDate: start.toISOString(),
        // endDate: new Date(2021, 11, 25).toISOString(),
      };

      AppleHealthKit.getHeartRateSamples(options, (callbackError, results) => {
        /* Samples are now collected from HealthKit */
        const lastHeartRates = results[results?.length - 1];
        setHeartRate(lastHeartRates?.value);
      });
      const stepOptions = {
        startDate: new Date(2021, 11, 20).toISOString(),
        endDate: new Date(2021, 11, 25).toISOString(),
      };
      AppleHealthKit.getStepCount(stepOptions, (callbackError, results) => {
        /* Samples are now collected from HealthKit */
        setSteps(Math.round(results.value));
      });

      let weightOptions = {
        unit: 'kg',
      };
      AppleHealthKit.getLatestWeight(weightOptions, (err, results) => {
        if (err) {
          console.log('error getting latest weight: ', err);
          return;
        }
        setWeight(parseFloat(results.value).toFixed(2));
      });
      AppleHealthKit.getLatestHeight({ unit: 'cm' }, (err, results) => {
        if (err) {
          console.log('error getting latest height: ', err);
          return;
        }
        console.log({ results });
        setHeight(parseFloat(results.value).toFixed(2));
      });
    });
  };

  useEffect(() => {
    // setInterval(() => {
    //   getDetails();
    // }, 500000);
    getDetails();
  });

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentStyle}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.txtHi}>Hi! Gordon Aguilar,</Text>
        <Text style={styles.txtToday}>Your board look good today!</Text>
        {/*<ScrollView*/}
        {/*  horizontal={true}*/}
        {/*  bounces={false}*/}
        {/*  showsHorizontalScrollIndicator={false}*/}
        {/*  contentContainerStyle={styles.contentContainerStyle}>*/}
        {/*  {renderTopicItem()}*/}
        {/*</ScrollView>*/}
        <View style={styles.flexWrap}>
          <ServiceItem
            onPress={onFindDoctor}
            svg={<SimpleLineIcons name={'fire'} size={38} color={'red'} />}
            title={'Steps'}
            content={steps}
          />
          <ServiceItem
            onPress={onFindHospital}
            svg={<SimpleLineIcons name={'heart'} size={38} color={'red'} />}
            title={'Heart Rate'}
            content={heartRate}
          />
          <ServiceItem
            onPress={onAppointment}
            svg={<Ionicons name={'body'} size={38} color={'red'} />}
            title={'height'}
            content={`${height} cm`}
          />
          <ServiceItem
            onPress={onPriceServices}
            svg={<Ionicons name={'body'} size={38} color={'red'} />}
            title={'Weight'}
            content={`${weight} kg`}
          />
        </View>
      </ScrollView>
    </View>
  );
});
export default MainPage;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  txtHi: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(38),
    color: colors.semiBlack,
    marginLeft: scaleWidth(24),
  },
  txtToday: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(30),
    color: colors.brown,
    marginLeft: scaleWidth(24),
    marginBottom: scaleHeight(20),
  },
  contentContainerStyle: {
    paddingLeft: scaleWidth(16),
    marginBottom: scaleHeight(24),
  },
  contentContainerFlatList: {
    paddingBottom: scaleHeight(80),
  },
  header: {
    backgroundColor: colors.white,
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
  btnClose: {
    position: 'absolute',
    bottom: scaleHeight(11),
    left: scaleWidth(16),
  },
  btnOption: {
    position: 'absolute',
    bottom: scaleHeight(11),
    right: scaleWidth(16),
  },
  svgCarer: {
    position: 'absolute',
    bottom: scaleHeight(11),
  },
  flexWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  contentStyle: {
    paddingTop: scaleHeight(21),
    paddingBottom: getBottomSpace() + scaleHeight(90),
  },
});
