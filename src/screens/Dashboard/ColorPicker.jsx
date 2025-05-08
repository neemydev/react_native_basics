import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const ColorPicker = () => {











 
    const   [selectColor ,setSelectColor] = useState("#6ab04c")
    const [randomColors , setRandomColors] = useState(["#ffffff"]); 
    const   [boxColor ,setBoxColor] = useState("#6b304c")
    const   [circleColor ,setCircleColor] = useState("#8b304d")

  //const [selectedColor, setSelectedColor] = useState(colors[0]);

 const pickedColor =()=>{
    const colors =[...randomColors]
    const randomBox = colors[Math.floor(Math.random() * colors.length)];
    const randomCircle = colors[Math.floor(Math.random() * colors.length)];
    setBoxColor(randomBox);
    setCircleColor(randomCircle);
    

 }
   
 const   MyColor =(color )=>{
    setSelectColor(color);
    setBoxColor(color);
    setCircleColor(color);
    //console.log("Selected Color:", color);

   }

//   const pickRandomColor = () => {
   
//     const random = colors[Math.floor(Math.random() * colors.length)];
//     setSelectedColor(random);  // store it in state
//     console.log("Selected Color:", random);
// };
 const SelectRandomColor=()=>{
    const hexRange="0123456789ABCDEF";
    let bgcolor="#";
    let boxColor="#";
    let circleColor="#";
    for(let i=0; i<6; i++){
        bgcolor+=hexRange[Math.floor(Math.random()*16)];
         boxColor+=hexRange[Math.floor(Math.random()*16)];
         circleColor += hexRange[Math.floor(Math.random()*16)]
    }
  // console.log(bgcolor);
   setSelectColor(bgcolor)
  setBoxColor(boxColor);
  setCircleColor(circleColor);
  // setRandomColors([...randomColors, bgcolor])
    //console.log(selectColor);
    //setSelectedColor(Math.floor(Math.random()*colors.length));
 }
 
  return (
    <View style={[styles.container ,{backgroundColor: "#f5f5f5"}]}>
    <Text style={styles.heading}>Color Picker</Text>
    
    <View style={styles.body}>
        <View style={[styles.colorBox, {backgroundColor:  circleColor , borderRadius:50}]}></View>
        <View style={[styles.colorBox, {backgroundColor: boxColor}]}></View>
        <View style={[styles.colorBox, {backgroundColor:  circleColor , borderRadius:50}]}></View>

        <View style={[styles.colorBox, {backgroundColor:  boxColor , borderRadius:50}]}></View>
        <View style={[styles.colorBox, {backgroundColor: circleColor}]}></View>
        <View style={[styles.colorBox, {backgroundColor:  boxColor , borderRadius:50}]}></View>

    </View>
    <TouchableOpacity style={[styles.button, {backgroundColor: 'red'}]} onPress={()=>SelectRandomColor()}>
        <Text style={[styles.colorText]}>Select Color </Text>
    </TouchableOpacity>
     
    </View>
  )
}

export default ColorPicker

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    body:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
       
        marginVertical:20,
        flexWrap:'wrap',
    },
    heading:{
        fontSize:30,
        fontWeight:'bold',
        color:'black',
    },
    colorBox:{
        width:100,
        height:100,
        borderRadius:10,
        marginVertical:10,
    },
    colorText:{
        fontSize:25,
        fontWeight:'bold',
        color:'black',
    },
    button:{
        padding:10,
        borderRadius:5,
    }
    
})