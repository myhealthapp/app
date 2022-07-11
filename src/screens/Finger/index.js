import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from 'react-native';
// import { AreaChart } from 'react-native-svg-charts'
import { LineChart } from 'react-native-chart-kit';
import { scaleHeight, scaleWidth } from '@ultis/size';
import colors from '@ultis/colors';
import SvgClock from '@svgs/Finger/SvgClock';

const screenWidth = Dimensions.get('window').width;
let myInterval = null;
const initValue = 60;
let complete = 0;

const Finger = ({ route }) => {
  const [seconds, setSeconds] = useState(initValue);

  const getNum = () => Math.floor(Math.random() * (94 - 30 + 1) + 30);
  const [point, setPoint] = useState([getNum()]);

  const handlePress = () => {
    let pointCal = initValue;

    myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((olds) => {
          return olds - 1;
        });
        pointCal = pointCal - 1;
        complete = Math.round((pointCal * 100) / initValue);
        if (pointCal % 5 === 0) {
          setPoint((olds) => {
            return [...olds, getNum()];
          });
        }
      } else {
        // clearInterval(myInterval);
      }
    }, 1000);
  };

  useEffect(() => {
    if (seconds <= 0 && myInterval) {
      clearInterval(myInterval);
    }
  }, [seconds]);

  const data = {
    // labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    datasets: [
      {
        data: [48, ...point],
        color: (opacity = 1) => `rgba(245, 179, 130, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#fff',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(245, 179, 130, ${opacity})`,
    // strokeWidth: 2, // optional, default 3
    barPercentage: 1,
    useShadowColorFromDataset: false, // optional
    style: {
      borderRadius: 16,
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <SvgClock />
        <View>
          <Text style={styles.counter}>
            0:{seconds < 10 ? `0${seconds}` : seconds}
          </Text>
        </View>
      </View>
      <Text style={styles.heading}>Let's get started..!!</Text>
      <Text style={styles.subHeading}>
        Place your index finger on your phone's camera for 60 seconds{' '}
      </Text>
      {seconds === initValue ? (
        <TouchableOpacity
          onPress={() => {
            handlePress();
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      ) : (
        <View key="test-chart-o1">
          <Text style={styles.lineChart}>
            <LineChart
              data={data}
              width={480}
              height={256}
              yAxisLabel=""
              yLabelsOffset={80}
              verticalLabelRotation={30}
              chartConfig={chartConfig}
              bezier
            />
          </Text>
          <Text style={styles.complete}>{`${100 - complete}% complete`}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  countDown: {
    width: '100%',
    height: scaleHeight(360),
    borderBottomRightRadius: scaleWidth(300),
    borderBottomLeftRadius: scaleWidth(300),
    marginBottom: scaleHeight(40),
    backgroundColor: '#FFF7F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontSize: 28,
    fontWeight: '500',
    color: colors.newBlack,
    marginTop: scaleHeight(-122),
  },
  heading: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '500',
    color: colors.newBlack,
    marginBottom: scaleHeight(10),
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '400',
    color: '#5E5E5E',
    lineHeight: scaleHeight(26),
    flex: 0.7,
    width: '60%',
  },
  button: {
    width: 260,
    height: 55,
    backgroundColor: '#FFF7F1',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFBBA8',
    borderRadius: 6,
    marginBottom: 30,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: '#5E5E5E',
  },
  lineChart: {
    justifyContent: 'flex-end',
    width: '100%',
  },
  complete: {
    fontSize: 14,
    fontWeight: '400',
    color: '#5E5E5E',
    lineHeight: scaleHeight(26),
    textAlign: 'center',
    marginTop: scaleHeight(-50),
  },
});
export default Finger;
