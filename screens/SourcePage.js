import React from "react";
import { Text, View, StyleSheet, SafeAreaView, Linking, TouchableOpacity, ScrollView, Image } from 'react-native';

const back = require("C:/Users/Yogesh/Desktop/project/Yummy/Icons/back.png")

const SourcePages = ({navigation}) => {
    return (
        <SafeAreaView style={styles.safearea}>
            <View style={styles.body}>
                <ScrollView style={styles.scroll}>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={()=>navigation.goBack()}>
                            <Image
                                source={back}
                                style={{ width: 20, height: 40 }}
                            />
                            <Text style={{ fontSize: 20, color: 'red', alignSelf: 'center', fontWeight: 'bold' }}>Back</Text>
                        </TouchableOpacity>

                        <View style={styles.headingView}>
                            <Text style={styles.headingTxt}>Source Code</Text>
                        </View>
                    </View>



                    <View style={styles.txtView}>
                        <Text style={styles.txt}>This application source code is available in Github.</Text>
                    </View>

                    <View style={styles.linkView}>
                        <Text style={styles.linkTxt}>Link : </Text>
                        <TouchableOpacity style={styles.linkBtn} onPress={() => {
                            Linking.openURL('https://github.com/Starkyogesh')
                        }}>
                            <Text style={[styles.linkTxt, { color: 'blue' }]}>https://github.com/Starkyogesh</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.contiTxtView}>
                        <Text style={styles.txt}>Click the link to get a my this project source code.</Text>
                    </View>

                    <View style={styles.downTxtView}>
                        <Text style={styles.downTxts}>1. SignUp.js : </Text>
                        <Text style={styles.downTxt}>This file is use to create a datas into table in "User Input"</Text>
                    </View>

                    <View style={styles.downTxtView}>
                        <Text style={styles.downTxts}>2. Login.js : </Text>
                        <Text style={styles.downTxt}>This file is use to how to get a data in SQL database and fetch a data into Login Screen</Text>
                    </View>

                    <View style={styles.downTxtView}>
                        <Text style={styles.downTxts}>3. HomeScreen.js : </Text>
                        <Text style={styles.downTxt}>This file is used to looking a TabBottomNavigation 2 button Screen  (1. Home Screen , 2. Menu Screen) </Text>
                    </View>

                    <View style={styles.downTxtView}>
                        <Text style={styles.downTxts}>4. MenuScreen.js : </Text>
                        <Text style={styles.downTxt}>This file is used to get a Source file and Project Details</Text>
                    </View>

                    <View style={styles.downTxtView}>
                        <Text style={styles.downTxts}>5. SQLData.js : </Text>
                        <Text style={styles.downTxt}>THis files is use to how to create a database, create a table and insert a data into table in SQLITE.</Text>
                    </View>

                    <Text>{'\n'}{'\n'}{'\n'}{'\n'}</Text>
                </ScrollView>
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
        height: '90%',
        top: '5%'
    },

    scroll: {
        height: '80%',
        width: '100%',
    },

    headingView: {
        marginLeft:40
    },

    headingTxt: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },

    txtView: {
        top: 10
    },

    txt: {
        color: 'black',
        fontSize: 20
    },

    linkView: {
        top: 30,
        flexDirection: 'row',
        alignSelf: 'center'
    },

    linkTxt: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },

    contiTxtView: {
        top: 40
    },

    downTxtView: {
        top: 50,
        marginTop: 10,
    },

    downTxt: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'darkorange',
        textAlign: 'justify'
    },

    downTxts: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black'
    },
});

export default SourcePages;