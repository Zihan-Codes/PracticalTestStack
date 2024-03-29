import React from "react";
import { Alert, ToastAndroid, View } from "react-native";
import { Button, Text } from "react-native-paper";
import GlobalStyle from "../../styles/GlobalStyle";
import {Column as Col, Row} from 'react-native-flexbox-grid';
import { useNavigation } from "@react-navigation/native";

const AlertButton = () => {
  const navigation = useNavigation();

    const showAlert = () => {
        Alert.alert('Welcome', 'Hello! This is a simple React Native app.');
    };

    const showToast = () => {
        ToastAndroid.show('Hello! This is a simple React Native app.', ToastAndroid.SHORT);
    };

    const goToLogin = () => {
      navigation.navigate('Login');
    };

    return(
        <View style={GlobalStyle.marginTop50px}>

          <Row size={12}>
            <Col sm={6} md={4} lg={3}>
               <Button mode="outlined" onPress={showAlert}>Alert Message</Button>
            </Col>

            <Col sm={6} md={4} lg={3}>
               <Button mode="outlined" onPress={showToast}>Toast Message</Button>
            </Col>
          </Row> 

          <Col sm={12} style={[GlobalStyle.alignCenter, GlobalStyle.marginTop50px]}>
            <Button mode="contained" onPress={goToLogin}>
              Go to Task 2
            </Button>
          </Col>  

            
        </View>
    );
};

export default AlertButton;