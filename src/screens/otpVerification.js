import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { imagePath } from '../config/images'

export const OtpVerification = ({navigation,route}) => {
  const value = route.params.paramKey;
  return (
    <View style={styles.container}>
      <Image source={imagePath.logo}/>
      <Text style={styles.otpText}>OTP Verification</Text>
      <Text style={styles.otpdesc}>Lorem ipsum, in graphical and textual context, refers to filter to filler text that is placed.</Text>
      
      <View style={styles.otpSec}>
        <TextInput keyboardType='numeric' style={styles.input}/>
        <TextInput keyboardType='numeric' style={styles.input}/>
        <TextInput keyboardType='numeric' style={styles.input}/>
        <TextInput keyboardType='numeric' style={styles.input}/>
      </View>
      <Text style={styles.rSndCd}>Resend Code</Text>
      <TouchableOpacity style={styles.nextBtn} onPress={()=>navigation.navigate('imgUpload',{paramKey : value})}>
          <Text style={styles.nextBtnText}>Next</Text>
      </TouchableOpacity>

      <View style={styles.nMmbr}>
          <Text style={styles.nMmbrTxt}> If you have existing account </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('login',{paramKey : value})}>
            <Text style={styles.nMmbrTxtSup}> Log In</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container : {
    backgroundColor : '#FFFFFF',
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',  
    marginHorizontal : 'auto', 
    
},
otpText: {
  textAlign : 'center',
  marginTop : 20,
  fontWeight : '700',
  fontSize : 18,
},
otpdesc : {
  textAlign : 'center',
  marginTop : 10,
  marginBottom : 20,
  maxWidth : '80%',
},
otpSec : {
    display : 'flex',
    justifyContent : 'space-between',
    flexDirection : 'row',
    maxWidth : '80%',
    width : '100%',
},
input:{
    height : 50,
    maxWidth : 50,
    width : '100%',
    marginVertical : 10,
    backgroundColor : '#f0f0f0',
    borderRadius : 5,
    textAlign : 'center',
},
rSndCd : {
    color : '#C00000',
    textDecorationLine : 'underline',
    maxWidth : '80%',
    width : '100%',
    textAlign : 'right',
    marginBottom : 20
},
nextBtn : {
  maxWidth : '80%',
  width : '100%',
  backgroundColor : '#1073B3',        
  marginVertical : 20,
  paddingVertical : 10,
  borderRadius : 5,
},
nextBtnText : {
  fontSize : 20,
  textAlign : 'center',
  fontWeight : '500',
  color : '#fff',
},
nMmbr : {
  display : 'flex',
  flexDirection :'row',
  position :'absolute',
  bottom : 50,
},
nMmbrTxtSup : {
  color : '#1073B3',
  fontWeight : '700',
}
})