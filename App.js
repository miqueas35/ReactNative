import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "./src/screens/Home";
import { Cart } from "./src/screens/Cart";
import { IconComponentProvider, Icon } from '@react-native-material/core';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ProductDetail } from "./src/screens/ProductDetail";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const StackComponent = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Product detail" component={ProductDetail}/>
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name='Home' 
          component={StackComponent}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <Icon name='home' size={26}/>
            ), 
            headerShown: false,
          }}
        />
        <Tab.Screen 
          name='Cart' 
          component={Cart}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <Icon name='cart' size={26}/>
            ),
            tabBarBadge: null  
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default () => (
  <IconComponentProvider IconComponent={MaterialCommunityIcons}>
    <App/>
  </IconComponentProvider>
);
