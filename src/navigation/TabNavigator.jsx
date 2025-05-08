import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, ROUTES } from '../constants';
import { Cart, Home, Products , Settings} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
 const cartState = useSelector((state)=>state.carts)
 const carts=cartState.carts || [];
  return (
    <Tab.Navigator
    screenOptions={({route})=>( 
      { headerTitleAlign:'center',
        //headerShown:false, 
        
        tabBarActiveTintColor:COLORS.primary,
        tabBarIcon:({color,size,focused})=>{
            let iconName; 
            if(route.name === ROUTES.HOME){

              iconName= focused?'home-sharp':'home-outline'
            }else if( route.name=== ROUTES.PRODUCT_PAGE){
              iconName= focused?'cube':'cube-sharp'
               
            } else if (route.name===ROUTES.SETTINGS){
              iconName= focused?'settings':'settings-outline'
              
            } 
            else if (route.name===ROUTES.CART){
              iconName= focused?'cart':'cart-outline'
              
            } 

            
          return <Icon size={25} color={color} name={iconName}  />
        },
        headerStyle:{backgroundColor:COLORS.primary},
        

    })}
    >
      <Tab.Screen name={ROUTES.HOME} component={Home} />
      <Tab.Screen name={ROUTES.PRODUCT_PAGE} component={Products} />
      <Tab.Screen options={{tabBarBadge: carts.length, tabBarBadgeStyle: {
      color: 'black',
      backgroundColor:COLORS.secondary,
    },}} name={ROUTES.CART} component={Cart} />
      <Tab.Screen name={ROUTES.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
}
export default TabNavigator