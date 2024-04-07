import React from "react";
import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import TestHeader from "../components/TestHeader";
import TaskHeader from "../components/TaskHeader";
import Login from "../components/Task2/Login";
import Task3 from "../components/Task2/Task3";

const LoginScreen = () => {
    return(
        <ScrollView>
            <TestHeader />
            <TaskHeader task="Task 2" />
            <Login />
            <Task3 />
        </ScrollView>
    );
};

export default LoginScreen;