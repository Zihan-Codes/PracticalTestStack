import React, { useState } from "react";
import { Button, View, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalStyle from "../../styles/GlobalStyle";
import { Text } from "react-native-paper";

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [userName, setUserName] = useState("");

  

    const authenticateUser = async () => {
        try {
            const response = await fetch('https://devapi.whitehouseproductsltd.com/token', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username: userName, 
                usersecret: '!api123', 
                userpassword: '!Temp123', 
              }),
            });
        
            const json = await response.json();
            if (json.auth_token) { 
              await AsyncStorage.setItem('@user_token', json.auth_token);
              setIsLoggedIn(true);
              setError("");
              setSuccess("Welcome! You are logged in.");
            } else {
              console.error('Authentication failed', json.error); 
              setError(json.error || 'Authentication failed'); 
              setSuccess("");
            }
          } catch (error) {
            console.error('Error during authentication:', error);
            setError(`Error during authentication: ${error.toString()}`);
            setSuccess("");
          }
    };

    return (
        <View style={[GlobalStyle.marginTop50px, GlobalStyle.marginBottom50]}>
          {/* <Text variant="titleLarge" style={[GlobalStyle.textCenter, GlobalStyle.marginTop25px]}>Click the Login Button to check your authentication</Text> */}
            {/* {!isLoggedIn ? (
                <>
                    <Button title="Login" onPress={authenticateUser} />
                    {error ? <Text style={GlobalStyle.textRed}>{error}</Text> : null}
                </>
            ) : (
                <Text style={[GlobalStyle.textGreen]} variant="titleLarge">Welcome! You are logged in.</Text>
            )} */}

          <Text style={GlobalStyle.textRed}>{error}</Text>
          <Text style={[GlobalStyle.textGreen]} variant="titleLarge">{success}</Text>

            <View>
              <Text variant="titleLarge" style={[GlobalStyle.textCenter, GlobalStyle.marginTop25px]}>Test the login with username</Text>
              <Text variant="titleLarge" style={[GlobalStyle.textCenter, GlobalStyle.marginTop25px, GlobalStyle.marginBottom50]}>User Name : apiuser@stacktech.io</Text>
              <TextInput
            style={[GlobalStyle.loginInput, GlobalStyle.marginBottom25]}
            placeholder="Enter username"
            value={userName}
            onChangeText={setUserName}
          />
          <Button style={GlobalStyle.marginTop25px} title="Login" onPress={authenticateUser} />
            </View>
        </View>
    );
};

export default Login;
