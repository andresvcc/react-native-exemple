import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const dependencies = {
  "@react-native-community/async-storage": "^1.7.1",
  "@react-native-community/datetimepicker": "^3.0.9",
  "@react-native-community/push-notification-ios": "^1.1.1",
  "@react-native-firebase/analytics": "^11.5.0",
  "@react-native-firebase/app": "^11.5.0",
  "@turf/turf": "^5.0.4",
  "axios": "^0.18.0",
  "credit-card-type": "8.2.0",
  "he": "^1.2.0",
  "jest-cli": "^23.6.0",
  "lodash": "^4.17.10",
  "lottie-ios": "^2.5.0",
  "lottie-react-native": "^2.6.1",
  "md5": "^2.2.1",
  "moment": "2.22.2",
  "moment-duration-format": "2.2.2",
  "moment-timezone": "^0.5.23",
  "polygonize": "^1.1.0",
  "prop-types": "^15.5.10",
  "qrcode": "1.3.3",
  "react": "16.13.1",
  "react-native": "0.63.3",
  "react-native-android-location-services-dialog-box": "^2.8.2",
  "react-native-animatable": "^1.3.0",
  "react-native-app-intro-slider": "1.0.1",
  "react-native-awesome-card-io": "0.8.2",
  "react-native-camera-kit": "^8.0.4",
  "react-native-check-box": "^2.0.2",
  "react-native-config": "1.0.0",
  "react-native-country-picker-modal": "^1.11.0",
  "react-native-credit-card-input": "^0.4.1",
  "react-native-debugger-open": "^0.3.17",
  "react-native-device-info": "5.5.7",
  "react-native-emoji": "1.3.1",
  "react-native-extended-stylesheet": "^0.10.0",
  "react-native-flags": "^1.0.0",
  "react-native-geolocation-service": "5.2.0",
  "react-native-gesture-handler": "1.6.1",
  "react-native-htmlview": "^0.13.0",
  "react-native-i18n": "git+https://github.com/AlexanderZaytsev/react-native-i18n.git",
  "react-native-keyboard-aware-scroll-view": "^0.9.2",
  "react-native-keyboard-spacer": "0.4.1",
  "react-native-keychain": "3.1.1",
  "react-native-loading-spinner-overlay": "^0.5.1",
  "react-native-maps": "0.29.2",
  "react-native-modal": "11.4.0",
  "react-native-permissions": "^1.1.1",
  "react-native-phone-input": "0.2.2",
  "react-native-popup-dialog": "^0.15.0",
  "react-native-popup-menu": "0.15.5",
  "react-native-push-notification": "3.2.1",
  "react-native-qrcode": "^0.2.6",
  "react-native-radio-buttons": "1.0.0",
  "react-native-safe-area-context": "^3.1.9",
  "react-native-safe-area-view": "^1.1.1",
  "react-native-slider": "^0.11.0",
  "react-native-snap-carousel": "^3.7.4",
  "react-native-sound": "0.11.0",
  "react-native-swiper": "1.6.0-nightly.3",
  "react-native-vector-icons": "^8.1.0",
  "react-native-webview": "9.1.1",
  "react-native-wheel-datepicker": "^2.2.3",
  "react-native-wheel-picker-android": "^2.0.6",
  "react-navigation": "3.11.0",
  "react-redux": "^7.2.1",
  "redux": "^4.0.5",
  "redux-logger": "^3.0.6",
  "redux-promise-middleware": "^6.1.2",
  "redux-thunk": "^2.3.0",
  "semver": "^7.3.2",
  "sha1": "^1.1.1",
  "socket.io-client": "2.0.4",
  "uuid": "3.3.2"
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
          {JSON.stringify(Object.keys(dependencies).join(" "), null, 2)}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});