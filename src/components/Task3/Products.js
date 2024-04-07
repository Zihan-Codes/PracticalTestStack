import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import * as SQLite from 'expo-sqlite';
import GlobalStyle from '../../styles/GlobalStyle'
import { Button, TextInput, Text } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import UpdateForm from './UpdateForm';
import { useAppContext } from '../../state/Context';

const db = SQLite.openDatabase('mydatabase.db');

const Products = () => {
    const [items, setItems] = useState([]);
    const [product, setProduct] = useState("");
    const [allProducts, setAllProducts] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [editIndex, setEditIndex] = useState('');

    // const { appState, setAppState } = useAppContext();
    // const { inputValue } = appState;

  

  useEffect(() => {
    console.log("state changed");
    console.log(allProducts);
}, [allProducts]);

  function saveProducts () {
    db.transaction(tx => {
        tx.executeSql("create table if not exists items (id integer primary key not null, value text);");
        tx.executeSql("insert into items (value) values (?)", [product]);
    });

    console.log("product saved");
    console.log(product);
    setProduct("");
    console.log(items);

    db.transaction(tx => {
      tx.executeSql("create table if not exists items (id integer primary key not null, value text);");
      tx.executeSql("select * from items", [], (_, { rows }) =>
      {
        console.log(JSON.stringify(rows));
        setAllProducts(rows._array || []);
      }
      
    );    });

}

function deleteProduct (index) {
   console.log(index);

   db.transaction((tx) => {
    tx.executeSql(
      'DELETE FROM items WHERE id = ?',
      [index],
      (tx, results) => {
        if (results.rowsAffected > 0) {
          console.log('Product deleted successfully');
          showProducts();
        } else {
          console.log('No product found with the given ID');
        }
      },
      (error) => {
        console.error('Error while deleting product:', error);
      }
    );
  });
}

function editProduct (id) {
  console.log(id);
  // console.log(allProducts[index]);
  const index = allProducts.findIndex(item => item.id === id);

  if(index !== -1){
    console.log(index)
    console.log(allProducts[index]);
    setEditIndex(index);
    // setProduct(allProducts[index].value);
    setModalVisible(true);

    // db.transaction((tx) => {
    //   tx.executeSql(
    //     'UPDATE items SET value = ? WHERE id = ?',
    //     [product, index],
    //     (tx, results) => {
    //       if (results.rowsAffected > 0) {
    //         console.log('Product updated successfully');
    //       } else {
    //         console.log('No product found with the given ID');
    //       }
    //     },
    //     (error) => {
    //       console.error('Error while updating product:', error);
    //     }
    //   );
    // });

  }else {
    console.log("index not found");
  }
}

const handleUpdate = (value) => {
  // Update your data or perform any action with the input value
  setInputValue(value);
};

function showProducts () {
    db.transaction(tx => {
        tx.executeSql("create table if not exists items (id integer primary key not null, value text);");
        tx.executeSql("select * from items", [], (_, { rows }) =>
        {
          console.log(JSON.stringify(rows));
          setAllProducts(rows._array || []);
        }
        
      );    });
}


  return (
    <View>
      <Text style={[GlobalStyle.marginTop50px, GlobalStyle.marginBottom50, GlobalStyle.textBlue]}>Enter a product name and click save..!</Text>
      <View>
                <Text variant="titleLarge" style={[GlobalStyle.textCenter, GlobalStyle.marginBottom50]}>Enter the Product name to save in database</Text>

                <Text>Product </Text>
                <TextInput
                label="Product"
                value={product}
                onChangeText={setProduct}
                mode="outlined"
                style={GlobalStyle.marginBottom10}
                 />


                 <Button mode="contained" onPress={saveProducts}>Save</Button>
                 <Button style={[GlobalStyle.marginTop50px, GlobalStyle.marginBottom50]} mode="outlined" onPress={showProducts}>Show Products</Button>
                 
                 <View>
      {allProducts.map(prdt => (
        <View key={prdt.id}>
          <View style={[GlobalStyle.listItemRow]} >
          <Text style={GlobalStyle.listItemText}>{prdt.value}</Text>
          <TouchableOpacity onPress={() => deleteProduct(prdt.id)} style={[GlobalStyle.listItemButton]}>
          <AntDesign name="delete" size={24} color="red" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => editProduct(prdt.id)} style={[GlobalStyle.listItemButton]} mode='contained' buttonColor='blue'>
          <AntDesign name="edit" size={24} color="blue" />
          </TouchableOpacity>
        </View>
        <UpdateForm 
               visible={isModalVisible}
               onClose={() => setModalVisible(false)}
               onUpdate={handleUpdate}
               index={prdt.id-1}
               value={prdt.value}
            />
        <View style={GlobalStyle.listHrLine} />
        </View>
      ))}
      </View>
            </View>
             
            
      
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
