import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts/index';
import colors from '@ultis/colors';
import InputButton from '@screens/CreateAccount/components/InputButton';
import ButtonPrimary from '@components/ButtonPrimary';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import ROUTES from '@ultis/routes';
import TextInputHealer from '@components/TextInputHealer';
import RNPickerSelect from 'react-native-picker-select';
import SvgArrowDown from '@svgs/SvgArrowDown';

const Ganders = [
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
];
const Ethinicitydata = [
  { label: 'Indian', value: 'Indian' },
  { label: 'Chinese', value: 'Chinese' },
  { label: 'American', value: 'American' },
];
const SkinColordata = [
  { label: 'Fair', value: 'Fair' },
  { label: 'Wheatish', value: 'Wheatish' },
  { label: 'Dark Brown', value: 'Dark Brown' },
];
const Environmentaldata = [
  { label: 'Dark Room', value: 'Dark Room' },
  { label: 'Bright Room', value: 'Bright Room' },
  { label: 'Open Area', value: 'Open Area' },
];
const Historydata = [
  { label: 'None', value: 'None' },
  { label: 'Hypertension', value: 'Hypertension' },
  { label: 'Coronary artery disease', value: 'Coronary artery disease' },
  { label: 'Hypercholester olemia', value: 'Hypercholester olemia' },
  { label: 'Prior Stroke', value: 'Prior Stroke' },
  { label: 'Sleep apnea', value: 'Sleep apnea' },
  { label: 'Diabetes condition', value: 'Diabetes condition' },
  { label: 'Prior MI', value: 'Prior MI' },
  { label: 'CHF', value: 'CHF' },
  { label: 'PVD', value: 'PVD' },
  { label: 'Other', value: 'Other' },
];

const TrainingDataset = memo(({ navigation }) => {
  const onChooseHospital = useCallback(() => {}, []);
  const onDoctor = useCallback(() => {}, []);
  const onDate = useCallback(() => {}, []);
  const onTime = useCallback(() => {}, []);

  const [Usergander, setUserGander] = useState('');
  const [Age, setAge] = useState('');
  const [UserHistory, setUserHistory] = useState('');
  const [OtherHistory, setOtherHistory] = useState('');
  const [UserWeight, setUserWeight] = useState('');
  const [UserHeight, setUserHeight] = useState('');
  const [UserEthinicity, setUserEthinicity] = useState('');
  const [SkinColor, setSkinColor] = useState('');
  const [Environmental, setEnvironmental] = useState('');

  const onFind = () => {
    navigation.navigate(ROUTES.TrainingDataset2);
  };
  const onChangeAge = (e) => {
    const re = /^[0-9\b]+$/;
    if (e === '' || (re.test(e) && parseInt(e) <= 100)) {
      setAge(e);
    }
  };

  const datafrom = () => {
    return (
      <View>
        <View style={styles.pickerviewstyle}>
          <View style={styles.pickerstyle}>
            <RNPickerSelect
              placeholder={{
                label: 'Gander',
                value: 'Gander',
                color: colors.dimGray,
              }}
              onValueChange={(value) => setUserGander(value)}
              items={Ganders}
              value={Usergander}
              style={styles.pickerStyles}
            />
            <SvgArrowDown />
          </View>
        </View>
        <TextInputHealer
          style={styles.inputButton}
          placeholder={'Age'}
          onChangeText={(text) => {
            onChangeAge(text);
          }}
          value={Age}
          keyboardType={'number-pad'}
        />
        <View style={[styles.pickerviewstyle, styles.inputButton]}>
          <View style={styles.pickerstyle}>
            <RNPickerSelect
              placeholder={{
                label: 'History/Comorbidity',
                value: 'History/Comorbidity',
              }}
              onValueChange={(value) => setUserHistory(value)}
              items={Historydata}
              value={UserHistory}
              style={styles.pickerStyles}
            />
            <SvgArrowDown />
          </View>
        </View>

        <TextInputHealer
          style={styles.inputButton}
          placeholder={'Other History'}
          value={OtherHistory}
          onChangeText={(text) => {
            setOtherHistory(text);
          }}
        />
        <TextInputHealer
          style={styles.inputButton}
          onChangeText={(text) => {
            setUserWeight(text);
          }}
          placeholder={'Weight'}
          value={UserWeight}
          keyboardType={'number-pad'}
        />
        <TextInputHealer
          style={styles.inputButton}
          onChangeText={(text) => {
            setUserHeight(text);
          }}
          placeholder={'Height'}
          value={UserHeight}
          keyboardType={'number-pad'}
        />

        <View style={[styles.pickerviewstyle, styles.inputButton]}>
          <View style={styles.pickerstyle}>
            <RNPickerSelect
              placeholder={{ label: 'Ethinicity', value: 'Ethinicity' }}
              onValueChange={(value) => setUserEthinicity(value)}
              items={Ethinicitydata}
              value={UserEthinicity}
              style={styles.pickerStyles}
            />
            <SvgArrowDown />
          </View>
        </View>
        <View style={[styles.pickerviewstyle, styles.inputButton]}>
          <View style={styles.pickerstyle}>
            <RNPickerSelect
              placeholder={{ label: 'Skin Color', value: 'SkinColor' }}
              onValueChange={(value) => setSkinColor(value)}
              items={SkinColordata}
              value={SkinColor}
              style={styles.pickerStyles}
            />
            <SvgArrowDown />
          </View>
        </View>
        <View style={[styles.pickerviewstyle, styles.inputButton]}>
          <View style={styles.pickerstyle}>
            <RNPickerSelect
              placeholder={{ label: 'Environmental', value: 'Environmental' }}
              onValueChange={(value) => setEnvironmental(value)}
              items={Environmentaldata}
              value={Environmental}
              style={styles.pickerStyles}
            />
            <SvgArrowDown />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>How can we take care yourself?</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {datafrom()}

        <ButtonPrimary
          onPress={onFind}
          style={styles.buttonPrimacy}
          title={'Start Recording'}
          style={styles.buttonstyle}
        />
      </ScrollView>
    </View>
  );
});

export default TrainingDataset;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: scaleHeight(28),
    fontWeight: '700',
    lineHeight: scaleHeight(36),
    marginTop: scaleHeight(36),
    marginHorizontal: scaleWidth(40),
    color: colors.brown,
  },
  inputButton: {
    marginTop: scaleHeight(24),
  },
  buttonPrimacy: {
    width: scaleWidth(295),
    alignSelf: 'center',
    marginTop: scaleHeight(79),
    position: 'absolute',
    bottom: getBottomSpace() + scaleHeight(24),
  },
  pickerStyles: {
    inputIOS: {
      color: colors.black,
    },
    placeholder: {
      color: colors.dimGray,
    },
    inputAndroid: {
      color: colors.black,
    },
  },
  pickerstyle: {
    alignSelf: 'center',
    width: '90%',
    marginLeft: scaleWidth(16),
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    color: colors.semiBlack,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pickerviewstyle: {
    width: scaleWidth(295),
    height: scaleHeight(48),
    backgroundColor: colors.frame,
    borderRadius: scaleHeight(24),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  buttonstyle: {
    marginVertical: scaleHeight(28),
    width: scaleWidth(295),
    alignSelf: 'center',
  },
});
