import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from "react-native";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/reducers";
import add from "../assets/add.jpg";
import * as ImagePicker from "expo-image-picker";
import { Icon } from "@rneui/themed";
import { Pressable } from "react-native";

function ItemForm({ toggleModal }) {
  const [itemName, setItemName] = useState("");
  const [storeName, setStoreName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("1");

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access the image library is required.");
      }
    })();
  }, []);

  const calculateTotalPrice = () => {
    const unitPrice = parseFloat(price);
    const qty = parseInt(quantity);
    if (!isNaN(unitPrice) && !isNaN(qty)) {
      return (unitPrice * qty).toFixed(2);
    }
    return "0.00";
  };

  const handleAddItem = () => {
    const newItem = {
      id: Date.now().toString(),
      name: itemName,
      store: storeName,
      category: category,
      image,
      price: parseFloat(price),
      quantity: parseInt(quantity),
    };

    dispatch(addItem(newItem));
    setItemName("");
    setStoreName("");
    setCategory("");
    setImage("");
    setPrice("");
    setQuantity("1");
    toggleModal();
  };

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const selectedImage = result.assets[0];
      setImage(selectedImage.uri);
    }
  };

  const handleScroll = () => {
    Keyboard.dismiss(); // Close the keyboard when scrolling
  };

  return (
    <ScrollView
      contentContainerStyle={[styles.formContainer, { paddingHorizontal: 5 }]}
      onScroll={handleScroll}
      style={styles.modalBackground}
    >
      <View
        style={
          ([styles.header],
          {
            // backgroundColor: "red",
            width: "100%",
            marginBottom: 5,
            paddingVertical: 10,
            alignItems: "center",
          })
        }
      >
        <Text style={{ color: "gray", fontSize: 18 }}>Add Item</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.image,
          { justifyContent: "center", alignItems: "center" },
        ]}
        onPress={selectImage}
      >
        {image ? (
          <Image
            source={{ uri: image }}
            //  style={styles.imagePreview}
            style={{ width: "100%", height: "100%", resizeMode: "center" }}
          />
        ) : (
          <Icon name="image" color="gray" selectable={true} />
        )}
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Product Name"
        placeholderTextColor="#888"
        value={itemName}
        onChangeText={(text) => setItemName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Store Name"
        placeholderTextColor="#888"
        value={storeName}
        onChangeText={(text) => setStoreName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Item Category"
        placeholderTextColor="#888"
        value={category}
        onChangeText={(text) => setStoreName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        placeholderTextColor="#888"
        value={price}
        onChangeText={(text) => setPrice(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        value={quantity}
        onChangeText={(text) => setQuantity(text)}
        keyboardType="numeric"
      />
      <Text style={{ marginVertical: 30 }}>
        Total Price: R{calculateTotalPrice()}
      </Text>
      <TouchableOpacity
        onPress={handleAddItem}
        style={{
          backgroundColor: "#5F6F52",
          width: "98%",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 10,
          marginBottom: 20,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins",
            color: "whitesmoke",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Add
        </Text>
      </TouchableOpacity>
      <Pressable
        onPress={toggleModal}
        style={{
          backgroundColor: "tomato",
          width: "98%",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 10,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins",
            color: "whitesmoke",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Close
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    alignItems: "center",
    flexGrow: 1,
    marginTop: 35,
    flex: 1,
    paddingVertical: 5,
  },
  modalBackground: {
    backgroundColor: "#fff",
    borderRadius: 18,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeButton: {
    padding: 10,
    left: 100,
  },
  closeButtonText: {
    fontSize: 24,
    color: "tomato",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    backgroundColor: "#fff",
    width: "98%",
    borderRadius: 8,
  },
  uploadButtonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 26,
  },
  addButtonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 26,
  },
  image: {
    height: 250, // Adjusted the height
    width: "100%",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
  },
  imagePreview: {
    width: 80,
    height: 80,
  },
});

export default ItemForm;
