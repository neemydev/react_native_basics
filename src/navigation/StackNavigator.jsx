import { createStackNavigator } from '@react-navigation/stack';
import {ROUTES}  from '../constants';
import { Home } from '../screens';
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.HOME} component={Home} />
     
    </Stack.Navigator>
  );
}