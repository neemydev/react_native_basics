import { View, Text , ActivityIndicator, StyleSheet ,FlatList , Image , ScrollView, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../../constants';
import { fetchProducts } from '../../redux/slice/product';
import { useDispatch, useSelector } from 'react-redux';
import { addCart , removeCart} from '../../redux/slice/cart';

  
const Products = () => {
 const [isAdded, setAdd]= useState(false);
 // const [products,setProducts]=useState([]);
 //const _products =useSelector((state)=>state.products);
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  
  // const getProducts =async()=>{
  //      try {
  //       const response = await fetch('https://fakestoreapi.com/products');
  //       const json= await response.json();
  //       //return json;
  //       setProducts(json);
  //       //' console.log(products);
  //              } catch (error) {
  //       console.error(error)
  //      }finally{
  //       setLoading(false)
  //      }
  // }
 
  useEffect(()=>{
    dispatch(fetchProducts());
   
  },[dispatch]);



  return (
    <View style={{flex:1}}>
      <Text  style={styles.headingText}>Products</Text>
      <ScrollView>
      <View style={styles.bodyContainer}>
        {loading ? (
         <ActivityIndicator  size={50} />):
        (products.map((product)=>  
                     <View key={product.id} style={styles.card}>
                        <Image style= {styles.imageStyle} source={{uri:product.image}}/>
                         <View style={styles.cardBody}> 
                            <Text numberOfLines={1} style={styles.title}>{product.title}</Text>
                            <Text > $ {product.price}</Text>
                              <View style={styles.cartButtons}>
                              <TouchableOpacity style={[styles.button, styles.title ]} 
                              onPress={()=>{

                                dispatch(addCart(product))}}>
                               <Text>   Add    </Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={[styles.button, styles.title ]} 
                              onPress={()=>{
                               // console.log('removed:' , product.id )
                                dispatch(removeCart(product.id))}}>
                               <Text>Remove</Text>
                              </TouchableOpacity>
                              </View>
                         </View>
                        
                     </View>))}      
        </View> 
      </ScrollView>
   </View>
  )
}

export default Products

const styles=StyleSheet.create({
  headingText:{
    fontSize:25, 
    fontWeight:'bold',
  }, 
  bodyContainer:{
    padding: 20 , 
    flex: 1, 
    flexDirection:'row', 
    flexWrap:'wrap',
    justifyContent: 'center' ,
    //alignItems:'center'
  }, 
  imageStyle:{
    height :100,
    resizeMode:'contain',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    marginTop:10
    //width:'40%'
  }, 
  card:{
    backgroundColor:'#ffffff',
    height:'auto',
    width:'47%', 
    marginHorizontal:5, 
    marginVertical:10, 
    elevation:5, 
    borderRadius:10
  } , 
  
cardBody:{
 paddingHorizontal:8,
 paddingVertical:10
  },
title:{
  fontWeight:'bold'
}, 
button:{
padding:8,
 backgroundColor:COLORS.primary, 
 borderRadius:10, 
 
},
cartButtons:{
  flex:1,
  flexDirection:'row',
  justifyContent:'space-between'
}

 
})