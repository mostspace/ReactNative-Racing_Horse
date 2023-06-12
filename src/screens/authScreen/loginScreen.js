import React, {useState} from 'react';
import {  View, Text, ImageBackground} from 'react-native';

// Custom Import 
import LHeaderScreen from '../LayoutScreen/LHeaderScreen';
import CheckButton from '../../components/Buttons/CheckButton';
import LoginButton from '../../components/Buttons/LoginButton';
import EmailInput from '../../components/EmailInput';
import PasswordInput from '../../components/PasswordInput';
import Screenstyles from '../ScreenStylesheet';
import AuthStyle from './AuthStyle';

const LoginScreen = ({navigation}) => {
    return (
    <View style={Screenstyles.container}>
      <ImageBackground
        source={require('../../assets/images/1.png')}
        resizeMode="contain"
        style={Screenstyles.img}>
            <LHeaderScreen/>
            <View style={AuthStyle.InputGroup}>
                <View style={AuthStyle.EmailInput}>
                    <Text style={AuthStyle.labelT}>ログインID</Text>
                    <EmailInput/>
                </View>   
                <View style={AuthStyle.PasswordInput}>
                    <Text style={AuthStyle.labelT}>パスワード</Text>
                    <PasswordInput/>
                </View>
                <View style={AuthStyle.checkboxContainer}>
                <CheckButton/>
                    <Text style={AuthStyle.label}>パスワードを保存しますか?</Text>
                </View>
                 <LoginButton label={'ログイン'}  onPress={() => navigation.navigate('AppStack')}/>
            </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

