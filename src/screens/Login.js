import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../componant/CustomButton";
import CustomInput from "../componant/CustomInput";
import { storeData } from "../utils/LocalStorage";

const Login = () => {
    const navigation = useNavigation();
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [emailIdError, setEmailIdError] = useState('');
    const [passwordError, setPasswordError] = useState('');
  
    const _onChangeEmail = text => {
      let value = '';
      setEmailId(text);
      if (text == '') {
        value = 'please enter email id';
      }
      setEmailIdError(value);
    };
  
    const _onChangePassword = text => {
      let value = '';
      setPassword(text);
      if (text == '') {
        value = 'please enter password';
      }
      setPasswordError(value);
    };
  
    const _handleLogin = () => {
      if (!emailId || emailIdError || !password || passwordError) {
        setEmailIdError(!emailId ? 'Plaese enter valid email' : emailIdError);
        setPasswordError(
          !password ? 'Please enter valid password' : passwordError,
        );
      } else {
        let user={
          emailId,
          password
        }
        storeData('user_data',JSON.stringify(user))
        navigation.navigate('Dashboard');
      }
    };
  
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.headerTitle}>Login</Text>
            </View>
            <View>
                <View>
                    <Text style={styles.inputTitle}>Email </Text>
                    <CustomInput
                        title={'write Email Here'}
                        value={emailId}
                        onChangeText={_onChangeEmail}
                        error={emailIdError}
                    />
                     <Text style={styles.errorText}>{emailIdError}</Text>
                </View>
                <View>
                    <Text style={styles.inputTitle}>Password</Text>
                    <CustomInput
                        title={'write Password Here'}
                        value={password}
                        onChangeText={_onChangePassword}
                        error={passwordError}
                    />
                     <Text style={styles.errorText}>{passwordError}</Text>
                </View>
            </View>
            <CustomButton title={'SIGN-IN'}
         onPress={_handleLogin}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    headerTitle: {
        alignSelf: 'center',
        margin: 15,
        fontSize: 22,
        color: 'black'
    },
    inputTitle: {
        fontSize: 18,
        color: 'black',
        marginVertical: 5,
        marginHorizontal: 10
    },
    errorText:{
        color:'red',
    marginLeft:5}
})
export default Login