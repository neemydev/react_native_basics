import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../constants'

 const CardComponent = (props)=>  {
  const {flag, name, value, symbol} = props.country;
  // useEffect(()=>{
  //   console.log('CardComponent props : ', name,flag, code, symbol);
  //   //console.log('CardComponent props : ', props.country.flag);
  //   //console.log('CardComponent props : ', props.country.name);
  //   //console.log('CardComponent props : ', props.country.code);
  //   //console.log('CardComponent props : ', props.country.symbol);
  //   //console.log('CardComponent props : ', props.country.name + " " + props.country.flag + " " + props.country.code + " " + props.country.symbol );
  // },[])
  return (
          
               <View style={[styles.card]}>
                <Text style={{fontSize:15,textAlign:'center',paddingTop:5, fontWeight:'bold'}}> {name} </Text>
                <Text style={{fontSize:15}}>{flag}</Text>
                <Text style={{fontSize:17, paddingBottom:5}}> {symbol} </Text>
               </View>
         
  )
}
export default  CardComponent; 
const styles = StyleSheet.create({
    
        card:{

            justifyContent:'center',
            alignItems:'center',
            margin:5,
            paddingVertical:10,
            height: 80,
            width: 80, 
            backgroundColor:COLORS.white, 
            borderRadius:15, 
            elevation:10
       
        
        }
})