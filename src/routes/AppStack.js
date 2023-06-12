import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import TopScreen from '../screens/TopScreen';
import PastureScreen from '../screens/PastureScreen';
import NRegistration from '../screens/NRegistration';
import HorseChoice from '../screens/HorseChoice';
import UpbringingScreen from '../screens/UpbringingScreen';
import PastureNameScreen from '../screens/PastureNameScreen';
import HorseName from '../screens/HorseName';

import InstitutionScreen from '../screens/InstitutionScreen';
import OfficeScreen from '../screens/OfficeScreen';

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <>
        <Stack.Navigator>
          <Stack.Screen
            name={'TopScreen'}
            component={TopScreen}
            options={{ headerShown: false }}
          />
        <Stack.Screen name={'PastureScreen'} component={PastureScreen} options={{ headerShown: false }}/>
        <Stack.Screen name={'NRegistration'} component={NRegistration} options={{ headerShown: false }}/>
        <Stack.Screen name={'HorseChoice'} component={HorseChoice} options={{ headerShown: false }}/>
        <Stack.Screen name={'UpbringingScreen'} component={UpbringingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name={'PastureNameScreen'} component={PastureNameScreen} options={{ headerShown: false }}/>
        <Stack.Screen name={'HorseName'} component={HorseName} options={{ headerShown: false }}/>
        <Stack.Screen name={'InstitutionScreen'} component={InstitutionScreen} options={{ headerShown: false }}/>
        <Stack.Screen name={'OfficeScreen'} component={OfficeScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    </>
  );
};
  
export default AppStack;