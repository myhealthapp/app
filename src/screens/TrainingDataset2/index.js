import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts/index';
import colors from '@ultis/colors';
import InputButton from '@screens/CreateAccount/components/InputButton';
import ButtonPrimary from '@components/ButtonPrimary';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import ROUTES from '@ultis/routes';
import TextInputHealer from '@components/TextInputHealer';
// import VideoRecorder from 'react-native-beautiful-video-recorder';

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

const TrainingDataset2 = memo(({ navigation }) => {
  const onChooseHospital = useCallback(() => {}, []);
  const onDoctor = useCallback(() => {}, []);
  const onDate = useCallback(() => {}, []);
  const onTime = useCallback(() => {}, []);

  const [GlucoseReading, setGlucoseReading] = useState('');
  const [BMPvaluehigh, setBMPvaluehigh] = useState('');
  const [BMPvaluelow, setBMPvaluelow] = useState('');
  const [HeartRate, setHeartRate] = useState('');
  const [BloodOxygen, setBloodOxygen] = useState('');

  const [OtherHistory, setOtherHistory] = useState('');
  const [UserWeight, setUserWeight] = useState('');
  const [UserHeight, setUserHeight] = useState('');
  const [UserEthinicity, setUserEthinicity] = useState('');
  const [SkinColor, setSkinColor] = useState('');
  const [Environmental, setEnvironmental] = useState('');

  const onFind = () => {
    navigation.navigate(ROUTES.ResultFindDoctor);
  };

  const datafrom = () => {
    return (
      <View>
        <TextInputHealer
          style={styles.inputButton}
          placeholder={'Glucose Reading'}
          onChangeText={(text) => {
            setGlucoseReading(text);
          }}
          value={GlucoseReading}
          keyboardType={'number-pad'}
          // returnKeyType={"next"}
        />
        <TextInputHealer
          style={styles.inputButton}
          placeholder={'BMP Value (High)'}
          onChangeText={(text) => {
            setBMPvaluehigh(text);
          }}
          value={BMPvaluehigh}
          keyboardType={'number-pad'}
        />
        <TextInputHealer
          style={styles.inputButton}
          placeholder={'BMP Value (Low)'}
          onChangeText={(text) => {
            setBMPvaluelow(text);
          }}
          value={BMPvaluelow}
          keyboardType={'number-pad'}
        />

        <TextInputHealer
          style={styles.inputButton}
          placeholder={'Heart Rate'}
          value={HeartRate}
          onChangeText={(text) => {
            setHeartRate(text);
          }}
        />
        <TextInputHealer
          style={styles.inputButton}
          onChangeText={(text) => {
            setBloodOxygen(text);
          }}
          placeholder={'Blood Oxygen Level'}
          value={BloodOxygen}
          keyboardType={'number-pad'}
        />
      </View>
    );
  };
  const videoRecorder = useRef(null);
  function startRecorder() {
    // if (videoRecorder && videoRecorder.current) {
    // console.log('sss',videoRecorder.current)
    // videoRecorder.current.open({ maxLength: 30 }, (data) => {
    // console.log('captured data', data);
    // })
    // }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>How can we take care yourself?</Text>
      {datafrom()}
      {/* <ScrollView
        showsVerticalScrollIndicator={false}>
           <TouchableOpacity onPress={startRecorder}>
          	<Text>Start</Text>
          </TouchableOpacity>
          <VideoRecorder ref={videoRecorder} compressQuality={'medium'} />

    
      <ButtonPrimary
        onPress={onFind}
        style={styles.buttonPrimacy}
        title={'Start Recording'}
        style={styles.buttonstyle}
        />
      </ScrollView> */}
      {/* <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <TouchableOpacity onPress={startRecorder} style={styles.btnCapture}>
                <Text style={styles.sectionTitle}>Capture video</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView> */}
      {/* <VideoRecorder ref={videoRecorder} compressQuality={'medium'} /> */}
    </View>
  );
});

export default TrainingDataset2;

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
  buttonstyle: {
    marginVertical: scaleHeight(28),
    width: scaleWidth(295),
    alignSelf: 'center',
  },
  scrollView: {
    // backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    // backgroundColor: Colo,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffff',
  },
  btnCapture: {
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 25,
  },
});
