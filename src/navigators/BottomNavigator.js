import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/home/HomeContainer';
import Schedule from '../pages/schedule/ScheduleContainer';
import Setting from '../pages/setting/SettingContainer';
import TabBar from '../components/organisms/BottomNavigationBar';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="HOME"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SCHEDULE"
        component={Schedule}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SETTING"
        component={Setting}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
