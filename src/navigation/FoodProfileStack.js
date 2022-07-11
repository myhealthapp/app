import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from '@ultis/routes';
import HeaderTitle from '@components/HeaderTittle';
import ButtonHeader from '@components/ButtonHeader';
import HeaderBackGround from '@components/HeaderBackGround';
import SvgMenu from '@svgs/SvgMenu';
import SvgNotification from '@svgs/SvgNotification';
// import Drugs from '@screens/Drugs';
import FoodProfile from '@screens/FoodProfile';

const Stack = createStackNavigator();

const FoodProfileStack = memo(() => {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true }}>
      <Stack.Screen
        name={ROUTES.FoodProfile}
        component={FoodProfile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
});

export default FoodProfileStack;
