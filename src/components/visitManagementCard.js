import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
export const VisitManagementCard = (props) => {
    
    return (
        <View style={styles.vmCard}>
            <Image style={styles.vmCardImg} source={props.vmCardImg}/>
            <View style={styles.vmCardDesc}>
                <Text style={styles.vmCardTitle}>{props.title}</Text>
                <Text style={styles.vmCardText}>{props.desc}</Text>
                <Text style={styles.vmCardTimeDate}>{props.timeDate}</Text>
            </View>
        </View>
    )
    

}

const styles = StyleSheet.create({
    vmCard : {
        backgroundColor : '#FFFFFF',
        borderRadius : 10,
        display : 'flex',
        flexDirection : 'row',
        padding : 10,
        marginVertical : 10
    },
    vmCardImg : {
        width : 80,
        height : 80,
        backgroundColor : 'rgba(1, 111, 193, 0.06)',
        borderRadius : 10,
        marginRight : 20,
    },
    vmCardDesc : {
        justifyContent : 'space-evenly',
        
    },
    vmCardTitle : {
        fontWeight : '700',
        fontSize : 16,
    },
    vmCardText : {
        fontSize : 11,
        maxWidth : '90%',
        color : "#c0c0c0"
    },
    vmCardTimeDate : {
        fontWeight : '500'

    }

})