

import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import * as Progress from 'react-native-progress';
import logo from '../../assets/image/logo.png'
import { imagePath } from '../config/images';

export const BrokerLoginAs = ({navigation}) => {

  const [loginAs, setLoginAs] = useState(1);

  const loginAsBrokingFirm = (e) => {
    e.preventDefault();
    setLoginAs(1);
    const value = 1;
    navigation.navigate('login',{paramKey : value});
    

  }

  const loginAsIndividual = (e) => {
    e.preventDefault();
    setLoginAs(2)
    const value = 2;
    navigation.navigate('login',{paramKey : value});
    

  }
    return (
      
        <View style={styles.container}>
            <Image style={styles.logo} source={imagePath.logo}/>
            <Text style={styles.loginTitle}>Login</Text>
            <Text style={styles.loginText}>lorem ipsum, in graphical and textual context, refers to filler text that is placed.</Text>
            <TouchableOpacity style={loginAs === 1 ? styles.blueBtn : styles.whiteBtn} onPress={loginAsBrokingFirm}>
              <Text style={loginAs === 1 ? styles.whiteText : styles.blueText}>Broking Firm</Text>
            </TouchableOpacity>

            <TouchableOpacity style={loginAs === 2 ? styles.blueBtn : styles.whiteBtn} onPress={loginAsIndividual}>
              <Text style={loginAs === 2 ? styles.whiteText : styles.blueText}>Individual Broker</Text>
            </TouchableOpacity>
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
  loginTitle: {
    marginTop : 30,
    marginBottom : 20,
    fontSize : 18,
    fontWeight : '700',
  },
  loginText : {
    textAlign : 'center',
    fontSize : 16,
    lineHeight : 23,
  },
  blueBtn : {
    backgroundColor : '#1073B3',
    marginTop : 50,
    width : '80%',
    paddingVertical : 10,
    borderRadius : 5,
  },
  whiteBtn : {
    borderWidth : 1,
    borderColor : '#1073B3',
    marginTop : 50,
    width : '80%',
    paddingVertical : 10,
    borderRadius : 5,
  },
  whiteText : {
    color : '#fff',
    fontSize : 20,
    fontWeight : 'bold',
    textAlign : 'center',
  },
  blueText : {
    color : '#1073B3',
    fontSize : 20,
    fontWeight : '500',
    textAlign : 'center',

  }
  
})