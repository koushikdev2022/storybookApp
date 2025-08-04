import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {  responsiveWidth, responsiveHeight,} from 'react-native-responsive-dimensions';


const QRCodeScreen = () => {
    return (

         <View style={styles.container}>
                <View style={styles.centerView}>
                      <Text style={styles.textsize}>QRCodeScreen</Text>
                </View>
         </View>  
    );
};

export default QRCodeScreen;



const styles = StyleSheet.create({
    container: {
        width:responsiveWidth(100),
        height:responsiveHeight(100), 
        // backgroundColor:'#536EFF'
    },
    centerView:{
        // flex:1,
        // justifyContent:'center',
        // alignItems:'center',
         width:responsiveWidth(100),
         height:responsiveHeight(12), 
         backgroundColor:'#536EFF'
    },
    textsize:{
        fontSize:responsiveHeight(4),
        fontWeight:'700',
        color:'#000000'
    }
    
});

