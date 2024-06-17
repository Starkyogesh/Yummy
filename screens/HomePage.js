import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeareaview}>
            <View style={styles.body}>
                <View style={styles.heading}>
                    <LottieView
                        source={require("../Icons/eatingBoy.json")}
                        autoPlay
                        style={{width:300,height:300}}
                    />
                </View>

                <View style={styles.titleView}>
                    <Text style={styles.titleTxt}>Let's eat</Text>

                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.subTitle}>Nutrious food.</Text>
                    </View>
                </View>

                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate('veg')}>
                        <Text style={styles.btnTxt}>Veg</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('nonveg')}>
                        <Text style={styles.btnTxt}>Non-Veg</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.downBtn}>
                    <TouchableOpacity style={styles.downBtn1} onPress={() => navigation.navigate('VegAndNonVeg')}>
                        <Text style={styles.btnTxt}>Veg & Non-Veg</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeareaview: {
        flex: 1,
        backgroundColor: 'white',
    },

    body: {
        flex: 1,
        paddingRight: 35,
        paddingLeft: 35,
        alignItems: 'center',
    },

    titleView: {
        width: '100%'
    },

    titleTxt: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    },

    subTitle: {
        fontSize: 25,
        color: 'black'
    },

    btnView: {
        top: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    btn1: {
        height: 150,
        backgroundColor: 'green',
        width: 150,
        justifyContent: 'center',
        borderRadius: 20,
        right: 10
    },

    btn2: {
        height: 150,
        backgroundColor: 'green',
        width: 150,
        justifyContent: 'center',
        borderRadius: 20,
        left: 10
    },

    downBtn: {
        height: 150,
        backgroundColor: 'green',
        width: 150,
        justifyContent: 'center',
        borderRadius: 20,
        top: 20
    },

    btnTxt: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
    },
});

export default Home;