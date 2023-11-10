import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput, // Add TextInput for search input
  StyleSheet,
  StatusBar,
  Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../Redux/reducers";
import ItemForm from "../components/ItemsForm";
import Modal from "react-native-modal";
import home from "../assets/home.jpg";
import { ScrollView } from "react-native";

function ItemListScreen() {
  const shoppingList = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  // Calculate the total cost by multiplying price with quantity for each item
  const totalCost = shoppingList.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Filter the shoppingList based on the search term
  const filteredList = shoppingList.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SafeAreaView
      style={{
        // alignItems: "center",
        flex: 1,
      }}
    >
      <StatusBar
        barStyle={"light-content"}
        translucent={false}
        backgroundColor="black"
      />

      <View
        style={{
          // flex: 1,
          height: 120,
          backgroundColor: "black",
          // justifyContent: "center",
          alignItems: "center",
          // elevation: 5,
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "whitesmoke",
              borderRadius: 100,
              borderWidth: 5,
              borderColor: "#2F2F2F",
            }}
          >
            <Image
              source={require("../assets/logo.png")}
              style={{ width: 45, height: 45 }}
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
        </View>
      </View>

      <View
        style={{
          paddingVertical: 8,
          paddingHorizontal: 4,
          flexDirection: "row",
          backgroundColor: "white",
          // flex: 1,
        }}
      >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 20,
              marginRight: 12,
              borderRadius: 10,
              backgroundColor: "whitesmoke",
            }}
          >
            <Text>Pill</Text>
          </View>
          <View
            style={{
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 20,
              marginRight: 12,
              borderRadius: 10,
              backgroundColor: "whitesmoke",
            }}
          >
            <Text>Yellow</Text>
          </View>
          <View
            style={{
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 20,
              marginRight: 12,
              borderRadius: 10,
              backgroundColor: "whitesmoke",
            }}
          >
            <Text>Tag</Text>
          </View>
          <View
            style={{
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 20,
              marginRight: 12,
              borderRadius: 10,
              backgroundColor: "whitesmoke",
            }}
          >
            <Text>Fruits</Text>
          </View>
          <View
            style={{
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 20,
              marginRight: 12,
              borderRadius: 10,
              backgroundColor: "whitesmoke",
            }}
          >
            <Text>Vegetables</Text>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          paddingHorizontal: 10,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: "100%",
              height: 100,
              backgroundColor: "whitesmoke",
              paddingHorizontal: 15,
              paddingVertical: 15,
              marginBottom: 5,
              borderRadius: 16,
              // elevation: 20,
            }}
          >
            <Text>RGrf</Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 100,
              backgroundColor: "whitesmoke",
              paddingHorizontal: 15,
              paddingVertical: 15,
              marginBottom: 5,
              borderRadius: 16,
              // elevation: 20,
            }}
          >
            <Text>RGrf</Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 100,
              backgroundColor: "whitesmoke",
              paddingHorizontal: 15,
              paddingVertical: 15,
              marginBottom: 5,
              borderRadius: 16,
              // elevation: 20,
            }}
          >
            <Text>RGrf</Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 100,
              backgroundColor: "whitesmoke",
              paddingHorizontal: 15,
              paddingVertical: 15,
              marginBottom: 5,
              borderRadius: 16,
              // elevation: 20,
            }}
          >
            <Text>RGrf</Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 100,
              backgroundColor: "whitesmoke",
              paddingHorizontal: 15,
              paddingVertical: 15,
              marginBottom: 5,
              borderRadius: 16,
              // elevation: 20,
            }}
          >
            <Text>RGrf</Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 100,
              backgroundColor: "whitesmoke",
              paddingHorizontal: 15,
              paddingVertical: 15,
              marginBottom: 5,
              borderRadius: 16,
              // elevation: 20,
            }}
          >
            <Text>RGrf</Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 100,
              backgroundColor: "whitesmoke",
              paddingHorizontal: 15,
              paddingVertical: 15,
              marginBottom: 5,
              borderRadius: 16,
              // elevation: 20,
            }}
          >
            <Text>RGrf</Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 100,
              backgroundColor: "whitesmoke",
              paddingHorizontal: 15,
              paddingVertical: 15,
              marginBottom: 5,
              borderRadius: 16,
              // elevation: 20,
            }}
          >
            <Text>RGrf</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

{
  /* <TouchableOpacity
        title="Create Shopping List"
        onPress={toggleModal}
        style={{
          backgroundColor: "red",
          height: 30,
          width: "80%",
          borderRadius: 10,
          marginVertical: 10,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 26 }}>
          Create list{" "}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={filteredList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <View style={styles.listItemContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.textContainer}>
                <Text>{item.name}</Text>
                <Text>Quantity: {item.quantity}</Text>
                <Text>Price: R{item.price.toFixed(2)}</Text>
              </View>
              <Button
                title="Remove"
                onPress={() => handleRemoveItem(item.id)}
              />
            </View>
          </View>
        )}
      />

      <View style={styles.totalContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Total Cost:</Text>
        <Text style={{ fontSize: 20 }}>R{totalCost.toFixed(2)}</Text>
      </View>

      <Modal isVisible={isModalVisible}>
        <ItemForm toggleModal={toggleModal} image={home} />
      </Modal> */
}

const styles = StyleSheet.create({
  listItemContainer: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 10,
  },
  textContainer: {},
  image: {
    width: 70,
    height: 70,
    marginHorizontal: 15,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  searchInput: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "whitesmoke",
    // margin: 10,
  },
});

export default ItemListScreen;
