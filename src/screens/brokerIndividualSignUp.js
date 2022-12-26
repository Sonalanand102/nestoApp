
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { imagePath } from '../config/images'

export const BrokerIndividualSignUp = ({navigation,route}) => {
  const value = route.params.paramKey;
  return (
    <View style={styles.container}>
      <Image source={imagePath.logo}/>
      <Text style={styles.CAText}>Create Account</Text>
      <Text style={styles.CAdesc}>Lorem ipsum, in graphical and textual context, refers to filter to filler text that is placed.</Text>
      <TextInput 
        style={styles.input}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        placeholder="City"
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile"
      />

      <TouchableOpacity style={styles.nextBtn} onPress={()=>navigation.navigate('otpVerification',{paramKey : value})}>
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
CAText: {
  textAlign : 'center',
  marginTop : 30,
  fontWeight : '700',
  fontSize : 18,
},
CAdesc : {
  textAlign : 'center',
  marginTop : 10,
  marginBottom : 10,
  maxWidth : '80%',
},
input: {
  height: 50,
  maxWidth : '80%',
  width : '100%',
  backgroundColor : '#f1f1f1',
  fontSize : 16,
  padding: 10,
  borderRadius : 5,
  marginVertical : 10,
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