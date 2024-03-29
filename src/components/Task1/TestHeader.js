import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import GlobalStyle from "../../styles/GlobalStyle";

const TestHeader = () => {
    return(
        <View style={GlobalStyle.header}>
            <Text style={[GlobalStyle.textCenter, GlobalStyle.textBlue]} variant="titleLarge">Practical Test</Text>
        </View>
    );
};

export default TestHeader;