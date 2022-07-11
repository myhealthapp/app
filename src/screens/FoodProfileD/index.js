import React, { useRef, useEffect } from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
  YellowBox,
  Text,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import InfoData from '@screens/FoodProfileD/components/InformartionCard';
import FONTS from '@ultis/fonts';
import { scaleHeight, scaleWidth } from '@ultis/size';
import colors from '@ultis/colors';
import SvgIndicatorInactive from '@svgs/MainBottomTab/SvgIndicatorInactive';

//svgIcon
import SvgCalories from '@svgs/Food/SvgCalories';
import SvgProtein from '@svgs/Food/SvgProtein';
import SvgFat from '@svgs/Food/SvgFat';
import SvgCarbs from '@svgs/Food/SvgCarbs';
import ROUTES from '@ultis/routes';

const foodImage = require('@assets/FoodProfile/food.png');
const data = [
  {
    title: 'Carbs',
    value: '62g',
    color: '#FDF1E1',
    icon: <SvgCarbs />,
  },
  {
    title: 'Protein',
    value: '30g',
    color: '#FFF7F1',
    icon: <SvgProtein />,
  },
  {
    title: 'Fat',
    value: '86g',
    color: '#F9f5f2',
    icon: <SvgFat />,
  },
  {
    title: 'Calories',
    value: '142',
    color: '#E7F3FF',
    icon: <SvgCalories />,
  },
];
const ingredients = [
  {
    name: 'Avacado',
    value: '3 slices',
  },
  {
    name: 'Shrimp',
    value: '4 pieces',
  },
  {
    name: 'Corn',
    value: '30 slices',
  },
  { name: 'Salmon', value: 'Calor4 small pieces' },
  { name: 'Sesame Seeds', value: 'Yes' },
];

const FoodProfileD = ({ route, navigation }) => {
  const refRBSheet = useRef();
  useEffect(() => {
    refRBSheet?.current?.open();
  }, []);

  const { params } = route;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: params?.source?.uri }}
        resizeMode="cover"
        style={styles.image}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        onClose={() => {
          navigation.navigate(ROUTES.FoodProfile);
        }}
        height={600}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
            borderRadius: scaleWidth(16),
          },
          draggableIcon: {
            backgroundColor: '#E7EEEE',
          },
        }}>
        <Text style={styles.txtHi}>Taco Salad</Text>
        <InfoData data={data} ingredients={ingredients} />
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9dad4',
  },
  image: {
    flex: 1,
    height: '33%',
    justifyContent: 'center',
  },
  txtHi: {
    fontWeight: '500',
    paddingTop: scaleHeight(14),
    fontSize: scaleHeight(30),
    lineHeight: scaleHeight(35),
    color: colors.semiBlack,
    marginLeft: scaleWidth(24),
  },
});

export default FoodProfileD;
