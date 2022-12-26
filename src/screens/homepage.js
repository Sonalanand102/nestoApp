import React from "react";
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { imagePath } from "../config/images";
import { DashboardCard } from "../components/dashboardCard";
import { VisitManagementCard } from "../components/visitManagementCard";

export const HomePage = ({navigation,route})=>{
    const value = route.params.paramKey;
    return(
        <View style={styles.container}>
            <View style={styles.srchBar}>
                <Text style={styles.homeTxt}>Home</Text>
                <Searchbar style={styles.search} placeholder="Search" onChangeText={() => {}} value="" />
			    
            </View>

            <View style={styles.graphical}>
                <View style={styles.graphical_desc}>
                    <Text style={styles.graphical_title}>Lorem Ipsum in Graphical</Text>
                    <Text style={styles.graphical_text}>Lorem Ipsum in Graphical and Textual context, refers</Text>
                </View>
                <Image style={styles.graphical_man} source={imagePath.graphical_man}/>
            </View>

            <View style={styles.sectionStart}>
                <Text style={styles.title}>Dashboard</Text>
                <Text style={styles.seeAll}>See all</Text>
            </View>

            <View horizontal={true} style={styles.dashboardCards}>
                <DashboardCard name="Total Sales" imageSource={imagePath.earningIcon}/>
                <DashboardCard name="Total Earning" imageSource={imagePath.salesIcon}/>
                <DashboardCard name="Total Clients" imageSource={imagePath.clientIcon}/>
            </View>

            <View style={styles.vssectionStart}>
                <Text style={styles.title}>Visit Management</Text>
                <Text style={styles.seeAll}>See all</Text>
            </View>

            <ScrollView disableScrollViewPanResponder={true} style={styles.vmCards}>
                <VisitManagementCard

                    title = "Meeting With Rahul Gupta"
                    desc = "Disscussion on Major Changes on CRM Software"
                    timeDate = "12:30 June 12,2022"
                />

                <VisitManagementCard
                    
                    title = "Meeting With Rahul Gupta"
                    desc = "Disscussion on Major Changes on CRM Software"
                    timeDate = "12:30 June 12,2022"
                />

                <VisitManagementCard
                    
                    title = "Meeting With Rahul Gupta"
                    desc = "Disscussion on Major Changes on CRM Software"
                    timeDate = "12:30 June 12,2022"
                />
            </ScrollView>

            <View style={styles.menuBar}>
                    <TouchableOpacity style={styles.subMenu}>
                        <Image style={styles.subMenuImg} source={imagePath.home_menu}/>
                        <Text style={styles.subMenuText} >Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subMenu}>
                        <Image style={styles.subMenuImg} source={imagePath.realStateHome}/>
                        <Text style={styles.subMenuText}>Properties</Text>
                    </TouchableOpacity>
               <TouchableOpacity style={styles.addProp} onPress={()=>{navigation.navigate('notification')}}>
                    <Image source={imagePath.plusIcon}/>
               </TouchableOpacity>

                    <TouchableOpacity style={styles.subMenu}>
                        <Image style={styles.subMenuImg} source={imagePath.user}/>
                        <Text style={styles.subMenuText}>Clients</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subMenu}>
                        <Image style={styles.subMenuImg} source={imagePath.readMore}/>
                        <Text style={styles.subMenuText}>More</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    srchBar : {
        backgroundColor : '#016FC1',
        height : 130,
        
    },
    homeTxt : {
        color : '#ffffff',
        fontWeight : '500',
        fontSize : 24,
        position : 'absolute',
        top : 50,
        left : 20,
    },
    search : {
        width : '90%',
        position : 'absolute',
        bottom : -25,
        alignSelf : 'center',

    },
    graphical : {
        backgroundColor : 'rgba(1, 111, 193, 0.06)',
        display : 'flex',
        justifyContent : 'space-between',
        flexDirection : 'row',
        maxWidth : '90%',
        width : '100%',
        alignSelf : 'center',
        position : 'relative',
        top : 50,
        borderRadius : 10,
        padding : 10,
    },
    graphical_desc: {
        maxWidth : '70%',
        justifyContent : 'center',
    },
    graphical_title : {
        fontSize : 17,
        fontWeight : '700',
        marginBottom : 10,
    },
    graphical_text : {
        lineHeight : 20,
        
    },
    graphical_man : {
       alignSelf : 'flex-end',
       marginRight : 10,
    },
    sectionStart:{
        top : 70,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        maxWidth : '90%',
        width : '100%',
        alignSelf : 'center',
        alignItems : 'baseline',
    },
    vssectionStart : 
    {
        top : 55,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        maxWidth : '90%',
        width : '100%',
        alignSelf : 'center',
        alignItems : 'baseline', 
    },
    title : {
        fontSize : 18,
        fontWeight : '700'
    },
    seeAll : {
        color : '#016FC1',
        fontWeight : '500',
        fontSize : 16,
    },
    dashboardCards : {
        top : 60,
        display : 'flex',
        flexDirection : 'row',
        maxWidth : '90%',
        width : '100%',
        alignSelf : 'center', 
        marginVertical: 20,
    },
    vmCards : {
        top : 40,
        maxWidth : '90%',
        width : '100%',  
        alignSelf : 'center', 
        marginVertical: 20,
        height : 200
    },
    menuBar : {
        bottom : 0,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        backgroundColor : '#fff',
        paddingHorizontal : '5%',
        alignItems : 'center',

    },
    subMenuImg : {
        justifyContent : 'center',
        alignSelf : 'center',
    }, 
    subMenuText : {
        textAlign : 'center',
    },
    addProp : {
        top : -40,
        backgroundColor : '#016FC1',
        height : 80,
        width : 80,
        borderRadius : 80,
        alignItems : 'center',
        justifyContent : 'center',
        
    }

})