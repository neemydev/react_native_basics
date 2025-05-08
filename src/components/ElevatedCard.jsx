import { View, Text , StyleSheet, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import CardComponent from './CardComponent' 


const ElevatedCard = () => {
  
    const numbers=[1,2,3,4,5,6,7,8,9,10];
    const colors=['aqua','teal','navy','purple','blue','green','red','yellow','lime'];
  return (
    <View>
     <Text style={styles.headingText}>ElevatedCard</Text>
       <View style={styles.cardContainer}>
        <ScrollView horizontal={true} contentContainerStyle={{ margin:2, padding:2 }}>
        {colors.map((color,index)=>(<CardComponent color={color} elevationLevel={5} text={color} key={index}/>))}

        </ScrollView>
       
          
                
      </View>
    </View>
  )
}

export default ElevatedCard

const styles = StyleSheet.create({
    headingText:{
        margin:10,
        fontSize:25, fontWeight:'bold'},
    cardContainer:{
         // flex:1, 
          flexDirection:'row',
          flexWrap:'wrap',
          justifyContent:'flex-start', 
          alignItems:'center',
          padding:8
      },
})