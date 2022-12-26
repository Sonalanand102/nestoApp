import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput, 
  SafeAreaView,
  Switch, 
  TouchableOpacity
} from 'react-native';
import React, {useState} from 'react';
import { imagePath } from '../config/images';

export const Login = ({navigation, route}) => {
  const value = route.params.paramKey;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Image source={imagePath.logo}/>
      <Text style={styles.signInText}>Sign In</Text>

        <TextInput
          style={styles.input}
          placeholder="xyz@gmail.com"
        />

        <TextInput
          style={styles.input}
          placeholder="password"
        />
        <View style={styles.fpSection}>
          <View style={styles.remMe}>
          <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#81b0ff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          />
          <Text style={styles.remMeText} > Remember Me</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.fpText}>Forget password?</Text>
          </TouchableOpacity>
        </View>

        {value === 1 && (
          <TouchableOpacity style={styles.signInBtn} onPress={()=> navigation.navigate('homepage',{paramKey : value})}>
          <Text style={styles.signInBtnText}>Sign In</Text>
        </TouchableOpacity>
        )}
        
        {value === 2 && (
          <TouchableOpacity style={styles.signInBtn} onPress={()=> navigation.navigate('homepage',{paramKey : value})}>
          <Text style={styles.signInBtnText}>Sign In</Text>
        </TouchableOpacity>
        )}
        {/* <Text style={styles.oLIwith}>--- Or Login With ---</Text> */}
        <View style={styles.socialMedia}>

        </View>

        {value === 1 && (
          <View style={styles.nMmbr}>
          <Text style={styles.nMmbrTxt}> New Member? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('brokerFirmSignUp',{paramKey : value})}>
            <Text style={styles.nMmbrTxtSup}> Sign Up</Text>
          </TouchableOpacity>
        </View>
        )}
        {value === 2 &&(
          <View style={styles.nMmbr}>
          <Text style={styles.nMmbrTxt}> New Member? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('borkerIndividualSignUp',{paramKey : value})}>
            <Text style={styles.nMmbrTxtSup}> Sign Up</Text>
          </TouchableOpacity>
        </View>
        )}
        
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
      signInText : {
        textAlign : 'left',
        color : '#1073B3',
        fontSize : 24,
        fontWeight : '500',
        maxWidth : '80%',
        width : '100%',
        marginTop : 50,
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
      fpSection : {
        maxWidth : '80%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
      },
      remMe : {
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
      },

      remMeText : {
        color : '#767577',
        
      },
      fpText : {
        color : '#C10000',
        fontSize : 15,
        textDecorationLine : 'underline',
      },
      signInBtn : {
        maxWidth : '80%',
        width : '100%',
        backgroundColor : '#1073B3',        
        marginVertical : 20,
        paddingVertical : 10,
        borderRadius : 5,
      },
      signInBtnText : {
        fontSize : 20,
        textAlign : 'center',
        fontWeight : '500',
        color : '#fff',
      },
      oLIwith : {
        color : '#767577',
        fontSize : 16,
        marginVertical : 20,
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