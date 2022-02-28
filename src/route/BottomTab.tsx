import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@app/components/home/HomeScreen';
import SettingScreen from '@app/components/settings/SettingScreen';
import SCREEN_NAME from './ScreenName';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={SCREEN_NAME.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={SCREEN_NAME.ACCOUNT_SCREEN} component={SettingScreen} />
      <Tab.Screen name={SCREEN_NAME.SETTING_SCREEN} component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
