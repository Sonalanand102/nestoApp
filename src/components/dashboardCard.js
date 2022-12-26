import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
export const DashboardCard = (props) => {
    
    return (
        <View style={styles.dashboardCard}>
            <View style={styles.cardImgbg}>
                <Image style={styles.cardImg} source={props.imageSource}/>
            </View>
            <Text style={styles.cardText}>{props.name}</Text>
        </View>
    )
    

}

const styles = StyleSheet.create({
    dashboardCard : {
        backgroundColor : '#FFFFFF',
        maxWidth : 100,
        width : '100%',
        maxHeight : 100,
        height : '100%',
        marginRight : 13,
        marginVertical : 10,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 10
    },
    cardImgbg : {
        backgroundColor : 'rgba(1, 111, 193, 0.06)',
        padding : 10,
        borderRadius : 50,
        marginVertical : 10,
        height : 50,
        width : 50
    },
    cardText : {
        color : '#016FC1',
        fontWeight : '500',
        fontSize : 13,
        marginBottom : 5
    }
})