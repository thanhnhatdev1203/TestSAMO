import React, { Component } from 'react';
import {
    AppRegistry, StyleSheet, Text, Platform, View, TouchableOpacity
} from 'react-native';
var n = 0 ;
function clickCount() {
    return (
        <View style={styles.ctn}>
            <Text>n</Text>
            <TouchableOpacity
            style ={styles.button} onPress = {() => (n - 1) }
            >
                <Text> - </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style ={styles.button} onPress = {() => (n + 1) }
            >
                <Text> + </Text>
            </TouchableOpacity>
        </View>
    )   
}
const styles = StyleSheet.create({
    ctn: {
        flexDirection: 'row',
        // margin: 10,
        // paddingHorizontal: 52

    },
    button: {
        paddingHorizontal: 50,
        borderRadius: 10,
        backgroundColor: 'green'
    },
    text: {
        fontSize: 24,
        fontWeight: '500',
        color: "white",
        textAlign: 'center',
        marginVertical: 5,

    }})