import Amplify from 'aws-amplify';
// @ts-ignore
import { AmplifyTheme, Authenticator, ConfirmSignUp, SignIn, SignUp } from 'aws-amplify-react-native';
import React, { useEffect, useState } from 'react';
import { LogBox, PermissionsAndroid, Platform } from 'react-native';
import 'react-native-gesture-handler';
import config from './src/aws-exports';
import RootNavigator from './src/navigations/Root';

// Creating custom theme for Amplify Authentication UI components
const CustomAmplifyUITheme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: '#f53333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    paddingTop: 10,
  },
  sectionHeaderText: {
    ...AmplifyTheme.sectionHeaderText,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  button: {
    ...AmplifyTheme.button,
    backgroundColor: 'black',
    borderRadius: 5
  },
  buttonText: {
    ...AmplifyTheme.buttonText,
    fontWeight: 'bold',
    fontSize: 16
  },
  buttonDisabled: {
    ...AmplifyTheme.buttonDisabled,
    backgroundColor: '#777',
    borderRadius: 5
  },
  sectionFooterLink: {
    ...AmplifyTheme.sectionFooterLink,
    color: '#f53333',
    fontWeight: 'bold',
    fontSize: 14
  }
};

// Configuring react-native LogBox to remove certain warning messages due to dependency deprecation
LogBox.ignoreLogs([/Setting a timer/, /Picker has been extracted/]);

// Configuring the amplify framework
Amplify.configure({
  ...config, Analytics: {
    disabled: true,
  },
})

const App = () => {
  // Creating a state to store authentication state
  const [authState, setAuthState] = useState('');

  // request for location permission for android devices
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Uber App location Permission",
          message: "Uber needs access to your location",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // If the platform is android request for location permission on app startup
  useEffect(() => {
    if (Platform.OS === 'android')
      requestLocationPermission()
  }, []);

  // Set the auth state to local state when it has changed
  const handleAuthStateChange = (state: string) => {
    setAuthState(state)
  };

  // If the auth state is not signedIn return the Amplify Authentication UI Components
  return authState !== 'signedIn' ?
    <Authenticator theme={CustomAmplifyUITheme} hideDefault={true} onStateChange={handleAuthStateChange}>
      <SignIn />
      <SignUp signUpConfig={{
        signUpFields: [
          {
            label: 'First Name',
            key: 'given_name',
            required: true,
            placeholder: 'John',
            type: 'string',
            displayOrder: -1,
          },
          {
            label: 'Last Name',
            key: 'family_name',
            required: true,
            placeholder: 'Doe',
            type: 'string',
            displayOrder: 1,
          },
        ]
      }} />
      <ConfirmSignUp />
    </Authenticator>
    : <RootNavigator />;
};

export default App;
