import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  ToastAndroid,
  Platform,
  AlertIOS,
} from 'react-native';

import { launchCamera } from 'react-native-image-picker';
import ROUTES from '@ultis/routes';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resourcePath: {},
    };
  }
  componentDidMount() {
    this.cameraLaunch();
  }

  cameraLaunch = async () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      maxHeight: '100%',
      presentationStyle: 'fullScreen',
    };
    const { navigation } = this.props;
    try {
      await launchCamera(options, (res) => {
        console.log('Response = ', res);
        if (res.didCancel) {
          console.log('User cancelled image picker');
        } else if (res.error) {
          console.log('ImagePicker Error: ', res.error);
        } else if (res.customButton) {
          console.log('User tapped custom button: ', res.customButton);
          alert(res.customButton);
        } else {
          const source = { uri: res?.assets[0]?.uri };
          const data = { base64: res?.assets[0] };
          console.log('response', JSON.stringify(res), { source, data });
          navigation.navigate(ROUTES.FoodDetails, { source, data });
        }
      });
    } catch (e) {
      if (Platform.OS === 'android') {
        ToastAndroid.show(msg, ToastAndroid.SHORT);
      } else {
        AlertIOS.alert(msg);
      }
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.cameraLaunch} style={styles.button}>
            <Text style={styles.buttonText}>Capture Photo</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  },
  button: {
    width: 250,
    height: 60,
    borderWidth: 2,
    borderColor: '#FFBBA8',
    borderRadius: 6,
    backgroundColor: '#fff7f1',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#5e5e5e',
  },
});
