import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Linking, Image, TouchableOpacity, ToastAndroid } from 'react-native';

const instaIcon = require('C:/Users/Yogesh/Desktop/project/Yummy/Icons/instagram.png');
const whatsappIcon = require('C:/Users/Yogesh/Desktop/project/Yummy/Icons/whatsapp.png');


const back = require("C:/Users/Yogesh/Desktop/project/Yummy/Icons/back.png")

const url1 = "whatsapp://send?phone=${contact}&text=${message}";

const AboutScreens = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.safearea}>
            <View style={styles.body}>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.goBack()}>
                        <Image
                            source={back}
                            style={{ width: 20, height: 40 }}
                        />
                        <Text style={{ fontSize: 20, color: 'red', alignSelf: 'center', fontWeight: 'bold' }}>Back</Text>
                    </TouchableOpacity>

                    <View style={styles.headingView}>
                        <Text style={styles.headingTxt}>WelCome</Text>
                    </View>
                </View>

                <Text style={{ fontSize: 20, color: 'black', top: 20 }}>Hii This Is Yogesh Jagadeesh</Text>

                <View style={styles.projectDetailsView}>
                    <View style={styles.projectHeading}>
                        <Text style={styles.headingTxt}>Project Details</Text>
                    </View>

                    <View style={styles.subTxtView}>
                        <Text style={styles.subTxt}>We will create a simplified version of a food ordering app. First,
                            the user will be greeted with a food list. Here’s what the details screen looks like.
                            This is where they can select the quantity and add the item to the cart. Adding an existing item to the cart will result in incrementing the quantity of the item that’s already in the cart.
                            Note that users can only order from Yummy restaurant only.
                        </Text>
                    </View>
                </View>

                <View style={styles.commView}>
                    <Text style={styles.headingTxt}>Communicate</Text>

                    <View style={styles.linkView}>
                        <View style={styles.instaView}>
                            <Image
                                style={styles.icons}
                                source={instaIcon}
                                resizeMode="cortain"
                            />
                            <TouchableOpacity style={styles.clickbtn} onPress={() => {
                                Linking.openURL("https://www.instagram.com/mr.__.stark.__")
                            }}>
                                <Text style={styles.btnTxt}>mr.__.stark.__</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.whatsappView}>
                            <Image
                                style={styles.icons}
                                source={whatsappIcon}
                                resizeMode="cortain"
                            />
                            <TouchableOpacity style={styles.clickbtn} onPress={() => {
                                Linking.openURL('https://wa.me/+917448706610')
                            }}>
                                <Text style={styles.btnTxt}>7448706610</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.downTxtView}>
                    <Text style={styles.txt}>Thanks For Using My Application</Text>
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

    headingView: {
        marginLeft: 60
    },

    headingTxt: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textAlign: 'center'
    },

    projectDetailsView: {
        backgroundColor: 'white',
        top: 30,
        marginLeft: 20,
        marginRight: 20
    },

    projectHeading: {
        alignSelf: 'center',
        textAlign: 'center'
    },

    subTxtView: {
        paddingTop: 10
    },

    subTxt: {
        color: 'black',
        fontSize: 20
    },

    commView: {
        top: 30,
    },

    linkView: {
        marginTop: 20,
        marginLeft: 30,
    },

    icons: {
        width: 50,
        height: 50
    },

    instaView: {
        flexDirection: 'row',
    },

    whatsappView: {
        top: 10,
        flexDirection: 'row',
    },

    clickbtn: {
        marginLeft: 10,
        justifyContent: 'center'
    },

    btnTxt: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold'
    },

    downTxtView: {
        marginTop: 70
    },

    txt: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'black',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
});

export default AboutScreens;