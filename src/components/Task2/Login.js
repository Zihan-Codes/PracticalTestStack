import React, { useState } from "react";
import { Button, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalStyle from "../../styles/GlobalStyle";
import { Text } from "react-native-paper";

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState("");

    const authenticateUser = async () => {
        try {
            const response = await fetch('https://devapi.whitehouseproductsltd.com/token', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username: 'apiuser@stacktech.io', 
                usersecret: '!api123', 
                userpassword: '!Temp123', 
              }),
            });
        
            const json = await response.json();
            if (json.auth_token) { 
              await AsyncStorage.setItem('@user_token', json.auth_token);
              setIsLoggedIn(true);
            } else {
              console.error('Authentication failed', json.error); 
              setError(json.error || 'Authentication failed'); 
            }
          } catch (error) {
            console.error('Error during authentication:', error);
            setError(`Error during authentication: ${error.toString()}`);
          }
    };

    return (
        <View style={[GlobalStyle.marginTop50px, GlobalStyle.marginBottom50]}>
          <Text variant="titleLarge" style={[GlobalStyle.textCenter, GlobalStyle.marginTop25px]}>Click the Login Button to check your authentication</Text>
            {!isLoggedIn ? (
                <>
                    <Button title="Login" onPress={authenticateUser} />
                    {error ? <Text>{error}</Text> : null}
                </>
            ) : (
                <Text style={[GlobalStyle.textGreen]} variant="titleLarge">Welcome! You are logged in.</Text>
            )}
        </View>
    );
};

export default Login;
