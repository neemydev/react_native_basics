import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'
import CardComponent from './CardComponent'


const FlatCard=()=> {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
       <View style={styles.cardContainer}>
           <CardComponent  text={'Green'}  />    
           <CardComponent  text={'Red'} color={'red'} />       
           <CardComponent  text={'Yellow'} color={'yellow'}/>       
      </View>
      
    </View>
  )
}
export default FlatCard;
const styles = StyleSheet.create({
    headingText:{
        margin:10,
        fontSize:25, fontWeight:'bold'},
    cardContainer:{
          flex:1, 
          flexDirection:'row',
          
      },
})