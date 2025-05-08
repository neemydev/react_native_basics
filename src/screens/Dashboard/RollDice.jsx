import { View, Text  , StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import { useDispatch, useSelector } from 'react-redux';
import { handleDiceRoll } from '../../redux/slice/dice';
import {selectRandomColor} from '../../redux/slice/color'



  const options={
    enableVibrateFallback:true,
    ignoreAndroidSystemSettings:true
  }
const RollDice = () => {
    //useDispatch();
   const dispatch = useDispatch();
   const diceValue = useSelector((state)=>state.dice);
   const bgColor = useSelector((state)=>state.color.bgColor);
   const color = useSelector((state)=>state.color.color);
    //const  [diceValue,setDiceValue] =useState(1);
    

//    const handleDiceRoll=()=>{
//     const randomNumber = Math.floor(Math.random() * 6) + 1;
//     setDiceValue(randomNumber);
//     ReactNativeHapticFeedback.trigger("impactMedium", options);
//       //console.log("😊");
//    }

   const CircleComponent = () => {
    // const circles = [];  // Array to hold the circles

    // for (let i = 0; i < diceValue; i++) {
    //     circles.push(
    //         <View key={i} style={styles.circle} />
    //     );
    // }

    const dotPositions={
        1:[4],
        2:[0,8],
        3:[0,4,8],
        4:[0,2,6,8],
        5:[0,2,4,6,8],
        6:[0,2,3,5,6,8],
    }

    return (
        <View style={[styles.dice,{backgroundColor:color}]}>
            {/* {circles} */}
             {[...Array(9)].map((_,index)=><View key={index}  style={[styles.cell,]}>
                {dotPositions[diceValue].includes(index) && (
                    <View style={[styles.dot]}/>
                )}

             </View>
            
            )}

        </View>
    );
   }
 

  return (
    <SafeAreaView style={[styles.container, {backgroundColor:bgColor}]}>
     
        
     <CircleComponent/>


     <TouchableOpacity onPress={()=> {
        dispatch(handleDiceRoll())
       dispatch(selectRandomColor())
     }}>
     <View style={[styles.Button,{borderColor:color}]}><Text style={styles.text}>Roll The Dice</Text></View>
     </TouchableOpacity>
     
    </SafeAreaView>
  )
}

export default RollDice
const styles = StyleSheet.create({
      
    container:{
     flex:1,
     justifyContent:'center',
     alignItems:'center'
      }, 
    dice: { 
    
        width: 250,
        height: 250,
        backgroundColor: 'purple',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderWidth: 1,
        borderColor: 'black',   
        elevation: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
    }, 
   

    cell:{
        width: 70,
        height: 70,
        borderRadius: 40,  
        margin: 5,
     
    }, 
    
    dot:{
        width: 70,
        height: 70,
        backgroundColor: 'white',
        borderRadius: 40,  
     
        borderWidth: 1,
        borderColor: 'black',  
    }, 
    Button:{
        margin:10,
        backgroundColor:'white',
        borderRadius:10,
        padding:15,
        borderWidth:1,
        borderColor:'purple',
        elevation:5
    }, 
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'purple'
    }


    
})
