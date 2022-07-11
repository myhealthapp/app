import React, { memo } from 'react';
import { View, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ROUTES from '@ultis/routes';
import SvgIndicatorInactive from '@svgs/MainBottomTab/SvgIndicatorInactive';
import SvgStethoscopeInactive from '@svgs/MainBottomTab/SvgStethoscopeInactive';
import colors from '@ultis/colors';
import SvgDoctorInactive from '@svgs/MainBottomTab/SvgDoctorInactive';
import SvgDrugInactive from '@svgs/MainBottomTab/SvgDrugInactive';
import SvgCalendar from '@svgs/MainBottomTab/SvgCalendar';
import SvgStatistics from '@svgs/MainBottomTab/SvgStatistics';
import SvgHome from '@svgs/MainBottomTab/SvgHome';
import SvgDashboard from '@svgs/MainBottomTab/SvgDashboard';
import UserProfile from '@screens/UserProfile';
import SvgUserProfileInactive from '@svgs/MainBottomTab/SvgUserProfileInactive';
import { scaleHeight, scaleWidth } from '@ultis/size';
import StaticsHealthStack from '@navigation/StaticsHealthStack';
import DoctorsStack from '@navigation/DoctorsStack';
import MainPageStack from '@navigation/MainPageStack';
import FoodProfileStack from '@navigation/FoodProfileStack';
import { ScaledSheet } from 'react-native-size-matters';
// import DrugsStack from '@navigation/DrugsStack';
import DailyReportStack from '@navigation/DailyReportStack';
import GlucoseLevelStack from '@navigation/GlucoseLevelStack';
import HeartRateStack from '@navigation/HeartRateStack';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import Finger from '@screens/Finger';

const Tab = createBottomTabNavigator();

const MainBottomTab = memo(() => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.MainPage}
      tabBarOptions={{
        style: styles.tabBarOptions,
        showLabel: false,
        activeTintColor: colors.classicBlue,
        inactiveTintColor: colors.silverChalice,
      }}>
      <Tab.Screen
        name={ROUTES.MainPage}
        component={MainPageStack}
        options={{
          tabBarIcon: ({ color }) => <SvgHome color={color} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.DailyReport}
        component={DailyReportStack}
        options={{
          tabBarIcon: ({ color }) => <SvgStatistics color={color} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.GlucoseLevel}
        component={GlucoseLevelStack}
        options={{
          tabBarIcon: ({ color }) => <SvgCalendar color={color} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.FoodProfile}
        component={FoodProfileStack}
        options={{
          tabBarIcon: ({ color }) => <SvgStethoscopeInactive color={color} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.Finger}
        component={Finger}
        options={{
          tabBarIcon: ({ color }) => <SvgStethoscopeInactive color={color} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.HeartRate}
        component={HeartRateStack}
        options={{
          tabBarIcon: ({ color }) => <SvgDashboard color={color} />,
        }}
      />
    </Tab.Navigator>
  );
});
export default MainBottomTab;

const styles = ScaledSheet.create({
  viewTabBarIcon: {
    backgroundColor: colors.classicBlue,
    borderWidth: scaleWidth(4),
    borderColor: colors.pageBackGround,
    height: scaleWidth(56),
    width: scaleWidth(56),
    borderRadius: scaleWidth(56),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:
      Platform.OS === 'ios'
        ? getBottomSpace() + scaleHeight(-60)
        : scaleHeight(-20),
  },
  tabBarOptions: {
    backgroundColor: colors.white,
    height: getBottomSpace() + scaleHeight(49),
    borderTopEndRadius: scaleWidth(24),
    borderTopStartRadius: scaleWidth(24),
    borderTopWidth: 0,
    position: 'absolute',
    bottom: 0,
  },
});
