import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

const Task3 = () => {
    const navigation = useNavigation();

    const goToTask3 = () => {
        navigation.navigate('Task3');
      };

    return(
        <View>
            <Button mode="contained" onPress={goToTask3}>Go to Task 3</Button>
        </View>
    );
};

export default Task3;