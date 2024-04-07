import React, { useState } from 'react';
import { View, Modal, TextInput, Button, StyleSheet } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mydatabase.db');

const UpdateForm = ({ visible, onClose, onUpdate, index, value }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleUpdate = () => {
    // Pass the input value to the parent component for updating
    onUpdate(inputValue);
    // Clear input value and close the modal

    db.transaction((tx) => {
        tx.executeSql(
          'UPDATE items SET value = ? WHERE id = ?',
          [inputValue, index],
          (tx, results) => {
            if (results.rowsAffected > 0) {
              console.log('Product updated successfully');
            } else {
              console.log('No product found with the given ID');
            }
          },
          (error) => {
            console.error('Error while updating product:', error);
          }
        );
      });

    console.log(inputValue)

    setInputValue('');
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput
            style={styles.input}
            placeholder="Enter value"
            value={inputValue}
            onChangeText={setInputValue}
          />
          <Button title="Update" onPress={handleUpdate} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default UpdateForm;
