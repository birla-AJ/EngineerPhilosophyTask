import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../componant/CustomButton";
import CustomInput from "../componant/CustomInput";
import DropDown from "../componant/DropDown";
import { storeData } from "../utils/LocalStorage";

const SignUp = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(false)
    const [qualification, setQualification] = useState('')
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [emailIdError, setEmailIdError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [userId, setUserId] = useState('')
    const [useridError, setUseridError] = useState('')
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const [dob, setDob] = useState('')
    const [dobError, setDobError] = useState('')
    const [quali, setQuali] = useState('')
    const [qualiError, setQualiError] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const qualificationData = [
        {
            id: 1,
            name: '10th'
        },
        {
            id: 2,
            name: '12th'
        },
        {
            id: 3,
            name: 'GRADUATION'
        },
        {
            id: 4,
            name: 'POST GRADUATE'
        },
    ]

    const genderData = [
        {
            id: 1,
            title: 'MALE',

        },
        {
            id: 2,
            title: 'FEMALE',

        },
        {
            id: 3,
            title: 'OTHERS',

        },
    ]

    const RenderItem = ({ item }) => {
        return (
            <View style={styles.genderContainer}>
                <Text>{item.title}</Text>
                <TouchableOpacity onPress={() => { setSelected(!selected) }}>
                    {selected ? (
                        <Image source={require('../assets/images/selected.png')} />
                    ) : (
                        <Image source={require('../assets/images/unselected.png')} />
                    )}
                </TouchableOpacity>
            </View>
        )
    }

    const _onChangeuserId = text => {
        let value = '';
        setUserId(text);
        if (text == '') {
            value = 'please enter USER-ID';
        };
        setUseridError(value);
    };

    const _onChangeName = text => {
        let value = '';
        setName(text);
        if (text == '') {
            value = 'please enter NAME';
        }
        setNameError(value);
    };
    const _onChangeEmail = text => {
        let value = '';
        setEmailId(text);
        if (text == '') {
            value = 'please enter valid EMAIL-ID';
        }
        setEmailIdError(value);
    };
    const _onChangeQualification = text => {
        let value = '';
        setQuali(text);
        if (text == '') {
            value = 'please select Qualification';
        }
        setQualiError(value);
    };
    const _onChangeDob = text => {
        let value = '';
        setDob(text);
        if (text == '') {
            value = 'please enter DATE OF BIRTH';
        }
        setDobError(value);
    };
    const _onChangePass = text => {
        let value = '';
        setPassword(text);
        if (text == '') {
            value = 'please enter password';
        }
        setPasswordError(value);
    };
    const _onChangeConfirmPass = text => {
        let value = '';
        setConfirmPass(text);
        if (text == '') {
            value = 'please enter password';
        }
        else if (confirmPass === !password) {
            value = 'please enter valid password'
        }
        setConfirmPasswordError(value);
    };
    const _handleSignUp = () => {
        if (!userId || useridError || !name || nameError || !emailId || emailIdError || qualiError ||
             !dob || dobError || !password || passwordError ) {
            setUseridError(!userId ? 'Plaese enter USER-id' : useridError);
            setNameError(!name ? 'Please enter your name' : nameError,);
            setEmailIdError(!emailId ? 'Please enter EMAIL-ID' : emailIdError,);
            setDobError(!dob ? 'Please enter your date of birth' : dobError,);
            setPasswordError(!password ? 'Please enter valid password' : passwordError,);
            // setConfirmPasswordError(!confirmPass ? 'Please enter valid password' : confirmPasswordError,);
        } else {
            let userdetail = {
                userId,
                name,
                emailId,
                dob,
                password
            };
            storeData('user_detail', JSON.stringify(userdetail))
            navigation.navigate('Login');
            console.log('store', userdetail)
        }

    };

    return (
        <ScrollView>
            <View>
                <Text style={styles.headerTitle}>SIGN UP</Text>
            </View>
            <View>
                <Text style={styles.inputTitle}>USER ID </Text>
                <CustomInput title={'Should be a number'}
                    value={userId}
                    onChangeText={_onChangeuserId}
                    error={useridError}
                    keyboardType={'number-pad'} />
                <Text style={styles.errorText}>{useridError}</Text>

                <Text style={styles.inputTitle}>NAME</Text>
                <CustomInput title={'Name should have min 2 characters'}
                    value={name}
                    onChangeText={_onChangeName}
                    error={nameError}
                />
                <Text style={styles.errorText}>{nameError}</Text>
                <Text style={styles.inputTitle}>EMAIL</Text>
                <CustomInput title={'Write valid email here'}
                    value={emailId}
                    onChangeText={_onChangeEmail}
                    error={emailIdError}
                    keyboardType={'email-address'}
                />
                <Text style={styles.errorText}>{emailIdError}</Text>
            </View>
            <Text style={styles.inputTitle}>GENDER</Text>
            <View>
                <FlatList
                    data={genderData}
                    renderItem={RenderItem}
                    keyExtractor={item => item.id}
                    horizontal={true} />
            </View>
            <DropDown data={qualificationData} titleName={'QUALIFICATION'}
                qualification={qualification} onPress={(item) => { setQualification(item) }}
                error={qualiError}
            />
            <Text style={styles.errorText}>{qualiError}</Text>
            <View>
                <Text style={styles.inputTitle}>DATE OF BIRTH </Text>
                <CustomInput title={'DD-MM-YYYY'}
                    value={dob}
                    onChangeText={_onChangeDob}
                    error={dobError}
                    keyboardType={'number-pad'} />
                <Text style={styles.errorText}>{dobError}</Text>

                <Text style={styles.inputTitle}>PASSWORD</Text>
                <CustomInput title={'Password'}
                    value={password}
                    onChangeText={_onChangePass}
                    error={passwordError}
                    />
                <Text style={styles.errorText}>{passwordError}</Text>

                <Text style={styles.inputTitle}>CONFIRM PASSWORD</Text>
                <CustomInput title={'Confirm Password'}/>
                <Text style={styles.errorText}>{confirmPasswordError}</Text>
            </View>
            <CustomButton title={'Sign UP'} onPress={_handleSignUp} />

        </ScrollView>
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
        fontSize: 16,
        color: 'black',
        marginHorizontal: 10,
        fontWeight: '500'
    },
    genderContainer: {
        flexDirection: 'row',
        margin: 5,
        marginLeft: 10
    },
    errorText: {
        color: 'red',
        marginLeft: 5
    }

})
export default SignUp