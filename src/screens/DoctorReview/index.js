import React, { memo, useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import DoctorReviewItem from '@screens/DoctorReview/components/DoctorReviewItem';
import keyExtractor from '@ultis/keyExtractor';
import { scaleHeight, scaleWidth } from '@ultis/size';
import ButtonPrimary from '@components/ButtonPrimary';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const REVIEWDATA = [
  {
    avatarUser: require('@assets/DoctorReview/01.png'),
    nameUser: 'Marion Wheeler',
    rateStar: 5,
    timeReview: '28 Jun 2020',
    desciptionReview: 'Understanding Drug And Alcohol Rehabilitation',
  },
  {
    avatarUser: require('@assets/DoctorReview/02.png'),
    nameUser: 'Andre Gonzalez',
    rateStar: 4,
    timeReview: '30 Jun 2020',
    desciptionReview:
      'Non Steroidal Anti Inflammatory Drugs As A Serious Risk Factor For Ulcer',
  },
  {
    avatarUser: require('@assets/DoctorReview/03.png'),
    nameUser: 'Elijah Wallace',
    rateStar: 3,
    timeReview: '18 Jun 2020',
    desciptionReview: 'Using Laser Treatment To Help You Quit Smoking',
  },
  {
    avatarUser: require('@assets/DoctorReview/04.png'),
    nameUser: 'Lora Berry',
    rateStar: 2,
    timeReview: '12 Jun 2020',
    desciptionReview: 'Tips For Preventing And Controlling High Blood Pressure',
  },
];

const DoctorReview = memo(() => {
  const [doctorReviewData, setDoctorReview] = useState(REVIEWDATA);

  const onWriteReview = useCallback(() => {}, []);

  const renderItem = useCallback(({ item }) => {
    const {
      avatarUser,
      nameUser,
      rateStar,
      timeReview,
      desciptionReview,
    } = item;

    return (
      <DoctorReviewItem
        avatarUser={avatarUser}
        nameUser={nameUser}
        rateStar={rateStar}
        timeReview={timeReview}
        desciptionReview={desciptionReview}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={doctorReviewData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <ButtonPrimary
        onPress={onWriteReview}
        style={styles.buttonPrimary}
        title={'Write Review'}
      />
    </View>
  );
});
export default DoctorReview;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(24),
  },
  buttonPrimary: {
    position: 'absolute',
    width: scaleWidth(295),
    alignSelf: 'center',
    bottom: getBottomSpace() + scaleHeight(24),
  },
});
