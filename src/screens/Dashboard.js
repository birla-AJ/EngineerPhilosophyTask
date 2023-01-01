import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Image,  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../componant/CustomButton";
import { getData } from "../utils/LocalStorage";
import { ScrollView } from "react-native-gesture-handler";

const Dashboard = () => {
    const [userData, setUserData] = useState();
    useEffect(() => {
        getData('user_detail').then((respon) => {
            let myData = JSON.parse(respon)
            console.log('data', myData)
            setUserData(myData)
        })
    }, [])
    const navigation = useNavigation();


    return (
        <SafeAreaView>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>
                    DASHBOARD
                </Text>
            </View>
            <View style={{ alignItems: 'flex-end', paddingRight: 10 }}>
                <CustomButton title={'LOGOUT'}
                    onPress={() => navigation.navigate('BottomTab', { screen: 'Login' })} />

            </View>
            <View style={styles.detailContainer}>
                <Image source={require('../assets/images/user.png')} />
                <Text style={styles.headerTitle}> {userData ? userData.name : 'user nnot define'} </Text>
            </View>

            <ScrollView>

                <View style={styles.detailContainer}>
                    <Text style={styles.headerTitle}>{userData ? userData.userId: 'data not available'}</Text>
                    <Text style={styles.headerTitle}>{userData ? userData.name : 'data not available'}</Text>
                    <Text style={styles.headerTitle}>{userData ? userData.emailId : 'data not available'}</Text>
                    <Text style={styles.headerTitle}>{userData ? userData.dob : 'data not available'}</Text>
                    <Text style={styles.headerTitle}>{userData ? userData.password : 'data not available'}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'yellow',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 22, fontWeight: '500', color: 'black',
        marginVertical: 15
    },
    detailContainer: {
        borderWidth: 2, margin: 15, justifyContent: 'center', alignItems: 'center', padding: 10
    }
})
export default Dashboard