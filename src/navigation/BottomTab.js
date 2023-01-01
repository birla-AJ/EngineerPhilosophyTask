import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const Tab = createBottomTabNavigator();


const BottomTab = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      options={{headerShown: false}}
     
      tabBarOptions={{
        activeTintColor: 'black',
        style: {
          backgroundColor: 'red',
          
        },
        labelStyle: {
          fontSize: 18,
         
        
        },
      }}>
      <Tab.Screen name="Login" component={Login} options={{headerShown: false}} />
      <Tab.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
     
    </Tab.Navigator>
  );
};

export default BottomTab;
