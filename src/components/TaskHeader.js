import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import GlobalStyle from "../styles/GlobalStyle";

const TaskHeader = (props) => {
    return(
        <View style={[GlobalStyle.taskHeader, GlobalStyle.marginTop5px]}>
            <Text style={[GlobalStyle.textCenter, GlobalStyle.textBlue]} variant="titleLarge">{props.task}</Text>
        </View>
    );
};

export default TaskHeader;