import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import * as Progress from 'react-native-progress';
import { imagePath } from '../config/images';



export const LoadingPage = () => {

 
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={imagePath.logo}/>
            <Image style={styles.companyName} source={imagePath.companyName}/>
            <Progress.Bar 
                style={styles.progressBar} 
                animated={true}
                indeterminate={true}
                indeterminateAnimationDuration={5000}
                color={'rgba(0,113,193,1)'}
                unfilledColor={'#D9D9D9'}
                borderWidth={0}
                progress={0.05} 
                width={296} 
                height={8}
                animationType={'spring'}
                useNativeDriver={true}
                animationConfig={{ bounciness: 0 }}
            />
        </View>
      )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#FFFFFF',
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',   
    },
    companyName : {
        marginVertical : 50,
    },
    progressBar : {
        position : 'absolute',
        bottom : 100,

    }
})