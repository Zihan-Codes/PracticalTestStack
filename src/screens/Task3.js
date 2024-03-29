import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import Products from "../components/Task3/Products";
import TestHeader from "../components/TestHeader";
import TaskHeader from "../components/TaskHeader";


const Task3 = () => {
    return(
        <View>
            <TestHeader />
            <TaskHeader task="Task 3" />
            <TaskHeader task="Task 4" />
            <Products />
        </View>
    );
};

export default Task3;