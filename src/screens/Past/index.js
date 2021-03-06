import React, { memo, useCallback, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import AppointmentListItem from '@components/AppointmentListItem';
import keyExtractor from '@ultis/keyExtractor';
import { scaleHeight } from '@ultis/size';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import colors from '@ultis/colors';

const PASTDATA = [
  {
    desciption:
      'Skin Cancer Prevention 5 Ways To Protect Yourself From Uv Rays',
    imgDoctor: require('@assets/AppointmentList/Doctor1.png'),
    doctorName: 'Dr. Charles Brady',
    specialized: 'Cardiologist',
    rating: '5.0',
    title: 'The Advantages Of\nMinimal Repair Technique',
    shortTitle: 'Checking your healthcare',
    location: '949 Satterfield Fort Suite 520',
    time: '24 May, 8am - 9am',
    done: true,
  },
  {
    desciption:
      'Skin Cancer Prevention 5 Ways To Protect Yourself From Uv Rays',
    imgDoctor: require('@assets/AppointmentList/Doctor2.png'),
    doctorName: 'Dr. Billy Myers',
    specialized: 'Cardiologist',
    rating: '5.0',
    title: 'The Advantages Of\nMinimal Repair Technique',
    shortTitle: 'Cataract What Causes It',
    location: '949 Satterfield Fort Suite 520',
    time: '24 May, 8am - 9am',
    cancel: true,
  },
  {
    desciption:
      'Skin Cancer Prevention 5 Ways To Protect Yourself From Uv Rays',
    imgDoctor: require('@assets/AppointmentList/Doctor3.png'),
    doctorName: 'Dr. Amy Norman',
    specialized: 'Cardiologist',
    rating: '5.0',
    title: 'The Advantages Of\nMinimal Repair Technique',
    shortTitle: 'Medical Care Is Just A Click',
    location: '949 Satterfield Fort Suite 520',
    time: '24 May, 8am - 9am',
    done: true,
  },
  {
    desciption:
      'Skin Cancer Prevention 5 Ways To Protect Yourself From Uv Rays',
    imgDoctor: require('@assets/AppointmentList/Doctor.png'),
    doctorName: 'Dr. Charlotte Cain',
    specialized: 'Cardiologist',
    rating: '5.0',
    title: 'The Advantages Of\nMinimal Repair Technique',
    shortTitle: 'The Truth About Hemorrhoids',
    location: '949 Satterfield Fort Suite 520',
    time: '24 May, 8am - 9am',
    done: true,
  },
];

const Past = memo(() => {
  const [pastData, setPastData] = useState(PASTDATA);

  const renderItem = useCallback(({ item }) => {
    const {
      desciption,
      imgDoctor,
      doctorName,
      specialized,
      rating,
      title,
      shortTitle,
      location,
      time,
      done,
      cancel,
    } = item;
    return (
      <AppointmentListItem
        desciption={desciption}
        imgDoctor={imgDoctor}
        doctorName={doctorName}
        specialized={specialized}
        rating={rating}
        title={title}
        shortTitle={shortTitle}
        location={location}
        time={time}
        done={done}
        cancel={cancel}
        disabled={true}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={pastData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
});

export default Past;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(80),
    paddingBottom: getBottomSpace(),
  },
});
