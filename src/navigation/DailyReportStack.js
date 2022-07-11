import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from '@ultis/routes';
import HeaderTitle from '@components/HeaderTittle';
import ButtonHeader from '@components/ButtonHeader';
import HeaderBackGround from '@components/HeaderBackGround';
import DailyReport from '@screens/DailyReport';
import SvgSearch from '@svgs/SvgSearch';
import SvgMenu from '@svgs/SvgMenu';

const Stack = createStackNavigator();

const DoctorsStack = memo(() => {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true }}>
      <Stack.Screen
        name={ROUTES.DailyReport}
        component={DailyReport}
        options={({ navigation }) => ({
          headerTitle: () => <HeaderTitle title={'Daily Report'} />,
          headerLeft: () => (
            <ButtonHeader
              onPress={() => navigation.navigate(ROUTES.Menu, { index: 2 })}
              children={<SvgMenu />}
            />
          ),
          headerRight: () => <ButtonHeader children={<SvgSearch />} />,
          headerBackground: () => <HeaderBackGround />,
        })}
      />
    </Stack.Navigator>
  );
});

export default DoctorsStack;
