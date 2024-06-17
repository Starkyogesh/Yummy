import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import CustomeTextInput from './customTextInput';
import { getUser } from './SqlData';

const logoImg = require("C:/Users/Yogesh/Desktop/project/Yummy/Icons/Yummy.png");
const userlogo = require("C:/Users/Yogesh/Desktop/project/Yummy/Icons/user.png");
const locklogo = require("C:/Users/Yogesh/Desktop/project/Yummy/Icons/padlock.png");

const logPage = ({ navigation }) => {

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const [badName, setBadName] = useState(false);
    const [badPassword, setBadPassword] = useState(false);

    const handlelog = () => {
        if (!userName) {
            setBadName(true);
            return;
        } else {
            setBadName(false);
        }

        if (!userPassword) {
            setBadPassword(true);
            return;
        } else {
            setBadPassword(false);
        }

        getUser(
            userName,
            userPassword,
            (results) => {
                if (results.rows.length > 0) {
                    navigation.navigate('Home', { getUser });
                } else {
                    Alert.alert('Error Fetching user:', error);
                }
            },
            (error) => {
                Alert.alert('Error Fetching user:', error);
            }
        );


    };

    return (
        <SafeAreaView style={styles.safearea}>
            <View style={styles.body}>
                <View style={styles.logoView}>
                    <Image
                        style={styles.logo}
                        source={logoImg}
                        resizeMode="cortain"
                    />
                </View>

                <View style={styles.headingView}>
                    <Text style={styles.headingTxt}>LogIn</Text>
                </View>

                <View style={styles.detailView}>
                    <View style={styles.detail1}>
                        <Image source={userlogo} resizeMode='cortain' style={styles.logos} />
                        <CustomeTextInput placeholder='Enter Name' placeholdertext={'black'} value={userName} onChangeText={(txt) => setUserName(txt)} />
                    </View>
                    {
                        badName === true && (<Text style={styles.badinput}>Please enter your name</Text>)
                    }

                    <View style={styles.detail1}>
                        <Image source={locklogo} resizeMode='cortain' style={styles.logos} />
                        <CustomeTextInput placeholder='Enter Password' placeholdertext={'black'} value={userPassword} type={userPassword} onChangeText={(txt) => setUserPassword(txt)} />
                    </View>
                    {
                        badPassword === true && (<Text style={styles.badinput}>Please enter your password</Text>)
                    }
                </View>

                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.btn} onPress={handlelog}>
                        <Text style={styles.btnTxt}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.newAccountbtn} onPress={() => navigation.navigate("SignPage")}>
                        <Text style={styles.newAccountbtnTxt}>Create New Account?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: 'white'
    },

    body: {
        backgroundColor: 'white',
        height: '90%',
        top: '5%'
    },

    logoView: {
        alignItems: 'center'
    },

    logo: {
        height: 200,
        width: 200
    },

    headingView: {
    },

    headingTxt: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        textDecorationLine: 'underline'
    },

    detail1: {
        height: 50,
        width: '85%',
        borderWidth: 0.5,
        alignSelf: 'center',
        marginTop: 40,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    logos: {
        height: 30,
        width: 30,
        marginLeft: 10
    },

    input: {
        marginLeft: 10,
        width: 200,
        fontSize: 20
    },

    badinput: {
        marginLeft: 30,
        marginTop: 10,
        fontSize: 15,
        color: 'red'
    },

    btnView: {
        alignItems: 'center',
        marginTop: 50
    },

    btn: {
        backgroundColor: 'green',
        width: '60%',
        justifyContent: 'center',
        height: 40,
        borderRadius: 20
    },

    btnTxt: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },

    newAccountbtn: {
        marginTop: 20
    },

    newAccountbtnTxt: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: 'black',
        fontWeight: 'bold'
    },

});

export default logPage;