import { View, Text , SafeAreaView , Button, Alert, StyleSheet, Switch, TouchableOpacity, TextInput} from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'; 
import { Formik } from 'formik';

import { COLORS } from '../../constants';


const Settings = () => {
   
  const [password, setPassword] =useState("");
  const [numbersIncluded, setNumbers ]=useState(false);
  const [upperCase, setUpperCase] =useState(false);
  const [lowerCase, setLowerCase] =useState(false);
  const [specialCharacter, setSpecialCharacters] =useState(false)

const passwordSchema = Yup.object().shape({
  passwordLength:Yup.number().min(8).max(20).required("Password length is required"),
})
//  const signUpSchema = Yup.object().shape({
//    name : Yup.string().required("Name is required"),
//    email:Yup.string().email('Email is invalid').required("Email is required"),
//    password: Yup.string().required('Password is required').matches(passwordSchema, { message: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.' }),
//  });
  // const generatePassword=(passwordLength)=>{

  // }
  const createPassword=(passwordLength)=>{
    let upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let  lowerCase = ' abcdefghijklmnopqrstuvwxyz' ;
    let numbers = '0123456789';
    let specialCharacters = "!@#$%^&*()_+[]{}|;:,.<>?";

    let characters='';
    if(upperCase){
      characters+=upperCase;
    }
    if(lowerCase){
      characters+=lowerCase;
    }
    if(numbersIncluded){
      characters +=numbers;
    }
    if(specialCharacter){
      characters+=specialCharacters;
    }
   
    
    let createdPassword="";
    for (let i=0 ; i<passwordLength;i++){
      let randomIndex = Math.round( Math.random()*characters.length);
      createdPassword = createdPassword + characters.charAt(randomIndex);
      //console.log(randomIndex + " : " + password);
 
    }

    setPassword(createdPassword)
  
  
    
   }
  return (
    <SafeAreaView style={{ flex : 1 ,marginTop: 10, }}>
       <Text  style={styles.heading} > Password Generator </Text>
      <Formik initialValues={{passwordLength: ''}}
      validationSchema={ passwordSchema}
      onSubmit={(values) => createPassword(values.passwordLength)}>
        { ({ handleChange, handleSubmit, values, errors }) => (
          <View style={{padding: 20 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10  , justifyContent: 'space-between'}}>
                <Text style={styles.lengthText}> Password Length </Text>
                <TextInput placeholder='00' onChangeText={handleChange('passwordLength')} style={{ fontSize:20, height: 50, width :  60 ,borderWidth: 1, borderColor: 'green', padding: 10, borderRadius: 5 , marginRight:10  }}/>
              </View>
              <Text style={{ color: 'red', fontSize: 12 }}>{errors.passwordLength}</Text>
              <View styles={styles.inputContainer}>
                  <View style={styles.switchRow}>
                      <Text style={styles.lengthText}>Include Numbers</Text>
                      <Switch value={numbersIncluded} onChange={()=>{return setNumbers(!numbersIncluded)}}/>
                  </View>
                  <View style={styles.switchRow}>
                      <Text style={styles.lengthText}>Include Uppercase</Text>
                      <Switch value={upperCase} onChange={()=>{return setUpperCase(!upperCase)}}/> 
                  </View>
                  <View style={styles.switchRow}>
                      <Text style={styles.lengthText}>Include Lowercase</Text>
                      <Switch value={lowerCase} onChange={()=>{return setLowerCase(!lowerCase)}}/>
                  </View>
                  <View style={styles.switchRow}>
                      <Text style={styles.lengthText}>Include Special Characters</Text>
                      <Switch value={specialCharacter} onChange={()=>{return setSpecialCharacters(!specialCharacter)}}/>
                  </View>
          
              </View>

              <TouchableOpacity style={styles.subMitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Generate Password </Text>
              </TouchableOpacity>
             
              <Text style={styles.lengthText}> Password Generated </Text>
              <Text style={styles.lengthText}>{password}</Text>
               

          </View>
        )}
      </Formik>
      
    </SafeAreaView>
  )
}

export default Settings

const styles=StyleSheet.create({
   heading :{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color:COLORS.primary
   }, 
    lengthText:{
      fontSize: 20,
      fontWeight: 'bold',
      color: COLORS.black
    },
    inputContainer:{
      marginVertical:10,
      marginHorizontal:20,
    },
    switchRow:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal:10, 
      marginVertical:5,
    },
 subMitButton:{
      backgroundColor: COLORS.primary,
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      margin: 20,
    
      
    },
submitButtonText:{
      color: COLORS.white,
      fontSize: 18,
      fontWeight: 'bold',
    },
    
   
})