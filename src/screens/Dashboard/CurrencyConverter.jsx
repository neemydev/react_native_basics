import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Yup from 'yup'; 
import { Formik } from 'formik';
import { convertCurrency, fetchCountries } from '../../redux/slice/currency';
import { useDispatch, useSelector } from 'react-redux';
import { ElevatedCard } from '../../components';
import CardComponent from '../../components/CardComponent';
import { COLORS } from '../../constants';

const CurrencyConverter = () => { 
     const countries =useSelector((state)=>state.currency.countries)
  const dispatch=useDispatch();
   useEffect(() =>{
     dispatch(fetchCountries());
     //console.log('fetched countries : ', countries[0].flag);
   },[dispatch])
    // Fetch exchange rates or any other necessary data here}



  const currencySchema=Yup.object().shape({
    amount:Yup.number().required("Amount is required").positive("Amount must be positive"), 
    rate:Yup.number().required("Amount is required").positive("Amount must be positive"), 

  });

  
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Currency Converter</Text>
        </View>
        <View style={styles.body}>
          <Formik 
          initialValues={{amount:""}}
          validationSchema={currencySchema}
          onSubmit={(values)=>console.log(values)}>
            {({handleChange,handleSubmit,errors, setFieldValue })=>(
              <View style={{ justifyContent:'space-around',}}> 
              <View style={styles.inputRow}>
                <Text style={styles.bodyText}>Rs.</Text>
                <TextInput 
                placeholder='Enter Amount'
                onChangeText={handleChange('amount')}
                style={styles.textInput}
                keyboardType='numeric'
                />
               </View>  
              {errors.amount && <Text style={styles.error}>{errors.amount}</Text>}
                <View  style={styles.countryCard}>
                { countries.map((country,index)=> 
                   <TouchableOpacity key={index} onPress={()=>{
                    setFieldValue('rate', country.value);
                    handleSubmit();
                    }}> 
                    <CardComponent   country={country} />
                    </TouchableOpacity>) 
                }
                  </View>                                          
              </View>  
            )}
          </Formik>
          <View style={styles.footer}>
          <Text style={styles.footerText}>  Converted Amount  </Text>
          <Text style={styles.footerBox}>  Converted Amount  </Text>

          </View>
        </View>
      

      
    </SafeAreaView>
  )
}

export default CurrencyConverter

const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:'black',
    padding:10
  }, 
  header:{
    borderRadius:10,
    marginBottom:10
  },
  headerText:{
    textAlign:'center',
    color:'white',
    fontSize:30,
    fontWeight:'bold'
  },
  error:{ textAlign:'center', color:'red'},
  inputRow:{
    padding:20 , 
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'center'
  }, 
  bodyText:{
    color:'white',
    fontSize:20, 
    fontWeight:'bold', 
    marginBottom:10
  }, 
  textInput:{
    borderWidth:1,  
    marginHorizontal:10, 
    fontSize:20, 
    borderColor:'black', 
    padding:20, 
    borderRadius:10, 
    backgroundColor:'white', 
  }, 
  countryCard:{  
    flexDirection:'row', 
    flexWrap:'wrap'},
  footer:{
          flexDirection:'row', 
          marginTop:20 ,
          justifyContent:'space-around',
          alignItems:'center',
  }, 
  footerText:{
    fontSize:17, 
    color:'white', 
    
  },
  footerBox:{
    fontSize:17,
    borderRadius:10 ,
    color:'grey', 
    backgroundColor:'white', 
    textAlign:'center', 
    padding:12}
  
})