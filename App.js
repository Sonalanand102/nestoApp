import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/homescreen';
import { ProfileScreen } from './src/screens/profilescreen';
import { LoadingPage } from './src/screens/loadingpage';
import { BrokerLoginAs } from './src/screens/brokerLoginAs';
import { Login } from './src/screens/login';
import { BrokerFirmSignUp } from './src/screens/brokerFirmSignUp';
import { BrokerIndividualSignUp } from './src/screens/brokerIndividualSignUp';
import { OtpVerification } from './src/screens/otpVerification';
import { ImgUpload } from './src/screens/imgUpload';
import { HomePage } from './src/screens/homepage';
// import { SplashScreen } from './src/screens/splashscreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="loading" component={LoadingPage}/>
        <Stack.Screen name="home" component={HomeScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="brokerloginas" component={BrokerLoginAs}   />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="brokerFirmSignUp" component={BrokerFirmSignUp} />
        <Stack.Screen name="borkerIndividualSignUp" component={BrokerIndividualSignUp} />
        <Stack.Screen name="otpVerification" component={OtpVerification} />
        <Stack.Screen name="imgUpload" component={ImgUpload} />
        <Stack.Screen name="homepage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
