import { View, Text , FlatList, Image, TouchableOpacity, StyleSheet} from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { COLORS, IMAGES } from '../../constants'
import Icon from 'react-native-vector-icons/Ionicons' 
import { cartTotal } from '../../redux/slice/cart'

const Cart = () => {
 
  const {carts, totalAmount} = useSelector((state)=>state.carts)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(cartTotal())
  },[carts])
  const renderItem=({item})=>(
       <View style={{flexDirection:'row', justifyContent :'space-between' , alignItems:'center' ,paddingHorizontal:20, paddingVertical:10, borderRadius : 20 , backgroundColor:COLORS.white, marginBottom:10}}> 
         <Image style ={{height: 120 , width:100, resizeMode : 'contain' }}source={{uri:item.image}}/>
         
         <View style={{  flex :1 }}>
            <Text style={{color:'black', fontWeight:'bold' ,fontSize:15 , marginVertical:10}} >{item.title} </Text>
            <Text style={{color:COLORS.primary , fontWeight:'bold' ,fontSize:20 , marginTop:20 , marginLeft: 20}}> $ {item.price}</Text>
         </View> 
         <View>
            <TouchableOpacity >
               <Icon name='add-circle' size={30} color={COLORS.primary}/>
              {/* <Text style={{color:COLORS.primary , fontSize : 25}}> + </Text> */}
            </TouchableOpacity>
            <Text style={{color:'grey' , fontSize : 20 , paddingLeft:4, paddingVertical:5}}> 1 </Text>
            <TouchableOpacity >
               <Icon name='remove-circle' size={30} color={COLORS.primary}/>
              {/* <Text style={{color:COLORS.primary , fontWeight:'bold' ,fontSize:30}}> - </Text> */}
            </TouchableOpacity>
         </View>
       </View>
    ); 

  const EmptyCart=()=>{
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Image  style ={styles.imageStyle}source={IMAGES.CART}/>
        <Text style={styles.headingText}> Your cart is empty </Text>
        <Text style={styles.bodyText}> Add cart from the Product Screen </Text>
        <TouchableOpacity style={{  backgroundColor:COLORS.primary, color:COLORS.white, padding:20, borderRadius:25 }}>
        <Text style={{ color:COLORS.white , fontSize : 20 }}>Product Screen</Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={{flex :1}}>
          { Array.isArray(carts) && carts.length>0 ? 
          ( 
          <View style={{flex :1 , padding: 10 , justifyContent:'space-around' }}>
              <FlatList 
                  data={carts}
                  keyExtractor={(item)=>item.id} 
                  renderItem={renderItem}/>
             <View style ={{flexDirection: 'row' , backgroundColor:COLORS.white, padding:20 , borderRadius:20 , justifyContent:'space-between' , alignItems:'center' , elevation:5}}>
                  <View style={{flexDirection:'row' , alignItems:'center'}}>
                    <Text style={styles.headingText}>Total</Text>
                    <Text style={{ fontSize : 20 , margin : 10 , color:'grey' , fontWeight:'bold'}}>{totalAmount} </Text>
                  </View>
                  <TouchableOpacity style={{backgroundColor:COLORS.primary, padding:20 , borderRadius:20}}>
                      <Text style={{color:COLORS.white , fontSize:20}}>Checkout</Text> </TouchableOpacity>
             </View>
          </View>):<EmptyCart/>}
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  headingText:{
    fontSize:25, 
    marginBottom:10,
    marginTop:10,
    color:COLORS.primary,
    fontWeight:'bold',
  }, 
  bodyText:{
    fontSize:17, 
    color:'grey',
    marginBottom:10,
    marginHorizontal:10
  
  }, 
  imageStyle:{
    height :250,
    resizeMode:'contain',
   
    marginBottom:10
  }, 

})