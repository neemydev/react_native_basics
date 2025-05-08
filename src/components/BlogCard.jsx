import { View, Text, StyleSheet , Image , TouchableOpacity , Linking} from 'react-native'
import React from 'react'

const BlogCard = () => {
    const webSiteLink=(link)=>{
     Linking.openURL(link);
    }
  return (
    <View>
      <Text style= {styles.headingText}>BlogCard</Text>
      <View style= {styles.CardContainer}>
        <Text style= {styles.cardTitle}>How To Show Image in React Native </Text>

       <Image style= {styles.imageStyle} source={{uri:'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*lcHL9Thiav_2607g.jpg'}}/>
       <View style= {styles.cardBody}>
                <Text style= {styles.cardLabel}>  written by  Naeem Yousaf </Text>
                <Text  numberOfLines={2} style= {styles.cardDescription}>There are Two important ways to show an image on screen in react native. In the first method , static images are kept in anywhere in the same project . To get these static images , we use require() method , which takes the path of image as string  </Text>
                
                 <View style={styles.footer}>   
                        <TouchableOpacity onPress={()=>webSiteLink('https://codeburst.io/top-10-blogs-to-get-you-started-in-react-native-deec9e55a7f7')}>
                          <Text style= {styles.socialLinks}> Read more ! </Text>    
                        </TouchableOpacity> 
                        <TouchableOpacity onPress={()=>webSiteLink('https://www.facebook.com/naeem.yousaf.39589')}>
                          <Text style= {styles.socialLinks}>  Follow me ! </Text>    
                       </TouchableOpacity> 
               </View>
                  
       </View>
      </View>
    
    </View>
  )
}

export default BlogCard

const styles= StyleSheet.create({
 headingText:{fontSize : 25 , fontWeight: 'bold' , marginHorizontal:8}, 
 CardContainer:{ 
    flex:1,
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
    marginVertical:4,
    height: 200,
   // width: '100%',

   
  },
  cardBody:{ flex :1 , justifyContent:'space-evenly' , padding:8},
  cardTitle:{fontSize:20, fontWeight:'bold'  , marginHorizontal:8, marginVertical:5},
  cardLabel:{ color:'#7B8788' },
  cardDescription:{color:'#616C6F'  , fontSize:15 ,},
  footer:{
   flex:1, flexDirection : 'row' , justifyContent: 'space-around',
   marginTop:10
  }, 
  socialLinks:{color:'#FFF' , fontSize:17  , fontWeight:'bold' , backgroundColor:'#F3B63A' , paddingHorizontal:12, paddingVertical:10, borderRadius:5, elevation:5}

})