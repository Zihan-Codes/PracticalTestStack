import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import * as SQLite from 'expo-sqlite';
import GlobalStyle from '../../styles/GlobalStyle'
import { Button, TextInput, Text } from 'react-native-paper';

const db = SQLite.openDatabase('mydatabase.db');

const Products = () => {
    const [items, setItems] = useState([]);
    const [product, setProduct] = useState("");

  useEffect(() => {
    

  }, []);

  function saveProducts () {
    db.transaction(tx => {
        tx.executeSql("create table if not exists items (id integer primary key not null, value text);");
        tx.executeSql("insert into items (value) values (?)", [product]);
    });

}

function showProducts () {
    db.transaction(tx => {
        tx.executeSql("create table if not exists items (id integer primary key not null, value text);");
        tx.executeSql("select * from items", [], (_, { rows }) =>
        console.log(JSON.stringify(rows))
        
      );    });
}


  return (
    <View>
      <Text style={[GlobalStyle.marginTop50px, GlobalStyle.marginBottom50, GlobalStyle.textBlue]}>Check your console for the database output!</Text>
      <View>
                <Text variant="titleLarge" style={[GlobalStyle.textCenter, GlobalStyle.marginBottom50]}>Enter the Product name and Price to save in database</Text>

                <Text>Product </Text>
                <TextInput
                label="Product"
                value={product}
                onChangeText={setProduct}
                mode="outlined"
                style={GlobalStyle.marginBottom10}
                 />


                 <Button mode="contained" onPress={saveProducts}>Save</Button>
                 <Button style={GlobalStyle.marginTop50px} mode="outlined" onPress={showProducts}>Show Products</Button>
            </View>
      <ScrollView style={{ flex: 1 }}>
      {items.map((item, index) => (
        <View key={index} style={{ margin: 10, padding: 10 }}>
          <Text>Name: {item.value}</Text>
        </View>
      ))}
    </ScrollView>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
