import React, {  useState } from 'react'
// import { Icon } from 'react-native-vector-icons/Icon';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native'
import * as Progress from 'react-native-progress';
import { imagePath } from '../config/images';



export const HomeScreen = ({navigation}) => {

  const [selectProfile, setSelectProfile] = useState(1)

  const onPressBroker = () => {
    setSelectProfile(1);

  }

  const onPressBuilder = () => {
    setSelectProfile(2);
    
  }

    return (
        <View style={styles.container}>
            <Text style={styles.chooseProfileTitle}>Who You are Choose User Profile</Text>
            <Text style={styles.chooseProfileText}>lorem ipsum, in graphical and textual context, refers to filter text that is placed</Text>
            <View style={styles.chooseProfileImage}>

            
                <TouchableOpacity onPress={onPressBroker} >
                <Image style={selectProfile === 1 ? styles.borderRed : styles.chooseProfile} source={imagePath.brokerProfile}></Image>
                <Text style={styles.profileTitle}>Broker</Text>
              </TouchableOpacity>
              
              
           
                  <TouchableOpacity onPress={onPressBuilder} >
                    <Image style={selectProfile === 2 ? styles.borderRed : styles.chooseProfile} source={imagePath.builderProfile}></Image>
                    <Text style={styles.profileTitle}>Builder</Text>
                  </TouchableOpacity>
               
            </View>

            {
              selectProfile === 1 && (
                <View style={styles.btnNext}>
                <TouchableOpacity 
                  onPress={() =>
                    navigation.navigate('brokerloginas')
                  }>
                  <Image source={imagePath.arrowForward}/>
                </TouchableOpacity>
                </View>
              )
            }
            
            {
              selectProfile === 2 && (
                <View style={styles.btnNext}>
                <TouchableOpacity 
                  onPress={() =>
                    navigation.navigate('loading')
                  }>
                  <Image source={imagePath.arrowForward}/>
                </TouchableOpacity>
                </View>
              )
            }
            

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
    chooseProfileTitle : {
        fontSize : 18,
        fontWeight : 'bold',
    },
    chooseProfileText : {
      fontSize : 16,
      textAlign : 'center',
      lineHeight : 25,
      marginVertical : 20
    },
    chooseProfileImage : {
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'center',
      alignItems : 'center',
      marginVertical : 100,
      maxWidth : 130,
      maxHeight : 130,
    },
    chooseProfile :{
      height : 130,
      width : 130,
      borderRadius : 65,
      marginHorizontal : 20,
    },
    borderRed :{
      height : 130,
      width : 130,
      borderRadius : 65,
      marginHorizontal : 20,
      borderWidth : 1,
      borderColor : '#C00000',
    },
    btnNext : {
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center',
      position : 'absolute',
      bottom : 100,
      width : 60,
      height : 60,
      borderRadius : 60,
      backgroundColor : '#0170C1',
    },
    profileTitle : {
      textAlign : 'center',
      fontWeight : '500',
      fontSize : 16,
      marginVertical : 10,
    }
})