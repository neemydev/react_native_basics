import { View, Text, StyleSheet , Image} from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style= {styles.headingText}>FancyCard</Text>
      <View style= {styles.CardContainer}>
       <Image style= {styles.imageStyle} source={{uri:'https://www.islands.com/img/gallery/15-most-famous-beaches-in-the-world/intro-1708456793.webp'}}/>
       <View style= {styles.cardBody}>
       <Text style= {styles.cardTitle}>Clifton Beach  </Text>
       <Text style= {styles.cardLabel}>Karachi, Pakistan</Text>
       <Text style= {styles.cardDescription}> Clifton Beach, also known as Sea View, is a beach in Karachi, Sindh, Pakistan and is located on the Arabian Sea.</Text>
       <Text style= {styles.cardFooter}> 12 Mins away  </Text>
       </View>
      </View>
    
    </View>
  )
}

export default FancyCard

const styles= StyleSheet.create({
 headingText:{fontSize : 25 , fontWeight: 'bold' , marginHorizontal:8}, 
 CardContainer:{ 
    height :360,
    marginHorizontal:10,
    marginVertical:10,
    borderRadius:10,
    borderWidth:1, 
    borderColor:'grey',
    elevation:5,
    overflow:'hidden',
    backgroundColor: '#EAF0F1',
    
    //backgroundColor:'grey'
 }, 

 imageStyle:{
    height: 200,
   // width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
   
  },
  cardBody:{ flex :1 , justifyContent:'space-evenly' , },
  cardTitle:{fontSize:20, fontWeight:'bold' , paddingHorizontal:8},
  cardLabel:{ color:'#7B8788' , paddingHorizontal:8},
  cardDescription:{color:'#616C6F' , paddingHorizontal:8 , fontSize:15},
  cardFooter:{color:'#333945' , padding:8 , fontSize:20 }

});