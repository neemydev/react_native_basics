import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { ColorPicker, CurrencyConverter, Home, RollDice, Settings } from './src/screens'
import { NavigationContainer } from '@react-navigation/native'
import { TabNavigator } from './src/navigation'
import  {store} from "./src/redux/store/store";
import { Provider } from 'react-redux'
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const App = () => {
  
  return (
    <GestureHandlerRootView> 
    <Provider store={store}>
      <NavigationContainer> 
       <ColorPicker/>
     </NavigationContainer>
   </Provider>
    </GestureHandlerRootView>
   

    
 
  
   
  )
}

export default App