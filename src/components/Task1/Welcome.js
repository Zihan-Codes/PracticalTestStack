import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import GlobalStyle from "../../styles/GlobalStyle";

const Welcome = () => {
    return(
        <View style={GlobalStyle.marginTop50px}>
            <Text style={[GlobalStyle.textCenter, GlobalStyle.marginTop25px]} variant="titleLarge">Welcome to My Quick App!</Text>
            <Text style={[GlobalStyle.textCenter, GlobalStyle.marginTop25px]} variant="titleMedium">This app was developed specifically for this test.</Text>
            <Text style={[GlobalStyle.textCenter, GlobalStyle.marginTop25px]} variant="bodyLarge">Tap the buttons below to trigger alerts, and use the login button to access your account.</Text>
        </View>
    );
};

export default Welcome;