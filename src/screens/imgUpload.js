import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { imagePath } from '../config/images'

export const ImgUpload = ({navigation,route}) => {
  const value = route.params.paramKey;
  return (
    <View style={styles.container}>
        <View>
            <Image style={styles.profileImg} source={imagePath.profileImg}/>
            <TouchableOpacity style={styles.addImgIconBtn}>
                <Image source={imagePath.addImg}/>
            </TouchableOpacity>
        </View>
        <Text style={styles.uppText}>Upload Professional Profile</Text>
        <Text style={styles.uppdesc}>Lorem ipsum, in graphical and textual context, refers to filter to filler text that is placed.</Text>
      
        <TouchableOpacity style={styles.uploadBtn} onPress={()=>navigation.navigate('homepage',{paramKey : value})}>
            <Text style={styles.uploadBtnText}>Upload</Text>
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
profileImg: {
    maxWidth : 200,
    maxHeight : 200,
},
addImgIconBtn : {
    position : 'absolute',
    backgroundColor : '#1073B3',
    width : 40,
    height : 40,
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 40,
    right : 20,
    bottom : 0,
},
uppText: {
  textAlign : 'center',
  marginTop : 20,
  fontWeight : '700',
  fontSize : 18,
},
uppdesc : {
  textAlign : 'center',
  marginTop : 10,
  marginBottom : 20,
  maxWidth : '80%',
},
uploadBtn : {
  maxWidth : '80%',
  width : '100%',
  backgroundColor : '#1073B3',        
  marginVertical : 20,
  paddingVertical : 10,
  borderRadius : 5,
},
uploadBtnText : {
  fontSize : 20,
  textAlign : 'center',
  fontWeight : '500',
  color : '#fff',
},

})