import React from "react";
import { View } from "react-native";
import TestHeader from "../components/TestHeader";
import TaskHeader from "../components/TaskHeader";
import Welcome from "../components/Task1/Welcome";
import AlertButton from "../components/Task1/AlertButton";
import GlobalStyle from "../styles/GlobalStyle";

const HomeScreen = () => {
    return(
        <View>
            <TestHeader />
            <TaskHeader task="Task 1" />
            <Welcome />
            <AlertButton />
        </View>
    );
};

export default HomeScreen;