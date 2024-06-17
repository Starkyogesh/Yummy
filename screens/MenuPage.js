import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

const Menu = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safearea}>
            <View style={styles.body}>
                <View style={styles.logoView}>
                    <LottieView
                        source={require("../Icons/dogbagging.json")}
                        autoPlay
                        style={{width:300,height:300,position:'absolute'}} 
                    />
                </View>

                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("SourcePages")}>
                        <Text style={styles.btnTxt}>Source Code</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("AboutScreen")}>
                        <Text style={styles.btnTxt}>About</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("LogPage")}>
                        <Text style={styles.btnTxt}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safearea: {
        backgroundColor: 'white',
        flex: 1
    },

    body: {
        backgroundColor: 'white',
        flex: 1
    },

    logoView: {
        alignItems: 'center',
    },

    btnView: {
        alignItems: 'center',
        top: '40%',
    },

    btn: {
        marginBottom: 40
    },

    btnTxt: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 40
    },
});

export default Menu;