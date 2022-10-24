import React from "react";
import { StyleSheet, View, Text } from 'react-native';
const Button = props => {
    return (
        <>
           { props.type === "login"?
        <View style={styles.login}>
            <Text style={{color:"white"}}>Login</Text>
        </View>:
        <View style={styles.signup}>
            <Text style={{color:"white"}}>Sign Up</Text>
        </View>}
        </>
    );
}

const styles = StyleSheet.create({
    signup:{
        width:"100%",
        height:"19%",
        // backgroundColor:"#32ba8f",
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:  1,
        borderColor:"#32ba8f"
    },
    login:{
        width:"100%",
        height:"19%",
        backgroundColor:"#32ba8f",
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:  1,
        borderColor:"#32ba8f"
    }
});

export default Button;