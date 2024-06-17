import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, TextInput, ToastAndroid, Alert } from 'react-native';
import { insertUser } from './SqlData.js';
import CustomeTextInput from './customTextInput';

const logoImg = require("C:/Users/Yogesh/Desktop/project/Yummy/Icons/Yummy.png");
const userlogo = require("C:/Users/Yogesh/Desktop/project/Yummy/Icons/user.png");
const locklogo = require("C:/Users/Yogesh/Desktop/project/Yummy/Icons/padlock.png");
const maillogo = require("C:/Users/Yogesh/Desktop/project/Yummy/Icons/email.png");

const signinPage = ({ navigation }) => {

    const [userName, setUserName] = useState('');
    const [userMail, setUserMail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const [badName, setBadName] = useState(false);
    const [badMail, setBadMail] = useState(false);
    const [badPassword, setBadPassword] = useState(false);

    const clickSignUp = () => {

        if (!userName) {
            setBadName(true);
            return;
        } else {
            setBadName(false);
        }

        if (!userMail) {
            setBadMail(true);
            return;
        } else {
            setBadMail(false);
        }

        if (!userPassword) {
            setBadPassword(true);
            return;
        } else {
            setBadPassword(false);
        }

        insertUser(
            userName,
            userMail,
            userPassword,
            () => {
                ToastAndroid.show('Your account is created', 2000);
                navigation.goBack()
            },
            (error) => {
                ToastAndroid.show('blocks', 2000)
            }
        );
    };

    return (
        <SafeAreaView style={styles.safearea}>
            <View style={styles.body}>
                <View style={styles.logoView}>
                    <Image
                        source={logoImg}
                        resizeMode='cortain'
                        style={styles.logo}
                    />
                </View>

                <View style={styles.headingView}>
                    <Text style={styles.headingTxt}>Create New Account</Text>
                </View>

                <View style={styles.detailView}>
                    <View style={styles.info}>
                        <Image style={styles.logos} resizeMode='cortain' source={userlogo} />
                        <CustomeTextInput placeholder={'Enter Name'} placeholdertext={'black'} value={userName} onChangeText={(txt) => setUserName(txt)} />
                    </View>
                    {
                        badName === true && (<Text style={styles.badinput}>Please enter your name</Text>)
                    }

                    <View style={styles.info}>
                        <Image style={styles.logos} resizeMode='cortain' source={maillogo} />
                        <CustomeTextInput placeholder={'Enter Mail id'} placeholdertext={'black'} value={userMail} onChangeText={(txt) => setUserMail(txt)} />
                    </View>
                    {
                        badMail === true && (<Text style={styles.badinput}>Please enter your mail</Text>)
                    }

                    <View style={styles.info}>
                        <Image style={styles.logos} resizeMode='cortain' source={locklogo} />
                        <CustomeTextInput placeholder={'Enter Password'} placeholdertext={'black'} value={userPassword} type={userPassword} onChangeText={(txt) => setUserPassword(txt)} />
                    </View>
                    {
                        badPassword === true && (<Text style={styles.badinput}>Please enter your password</Text>)
                    }
                </View>

                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.signBtn} onPress={clickSignUp}>
                        <Text style={styles.signBtnTxt}>SIGN UP</Text>
                    </TouchableOpacity>

                    <View style={styles.backLogView}>
                        <Text style={styles.backLogBtnTxt}>Already Have A Account ? </Text>
                        <TouchableOpacity style={styles.backLogBtn} onPress={() => navigation.goBack()}>
                            <Text style={[styles.backLogBtnTxt, styles.txt]}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
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
        alignItems: 'center'
    },

    headingTxt: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textDecorationLine: 'underline'
    },

    info: {
        width: '85%',
        borderWidth: 0.5,
        alignSelf: 'center',
        height: 50,
        borderRadius: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },

    logos: {
        height: 30,
        width: 30,
        marginLeft: 10
    },

    badinput: {
        marginLeft: 30,
        marginTop: 10,
        fontSize: 15,
        color: 'red'
    },

    btnView: {
        alignSelf: 'center',
        marginTop: 50,
        justifyContent: 'center'
    },

    signBtn: {
        backgroundColor: 'green',
        height: 40,
        justifyContent: 'center',
        borderRadius: 20
    },

    signBtnTxt: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },

    backLogView: {
        flexDirection: 'row',
        marginTop: 20
    },

    backLogBtnTxt: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },

    txt: {
        color: 'blue',
        textDecorationLine: 'underline'
    },
});

export default signinPage;