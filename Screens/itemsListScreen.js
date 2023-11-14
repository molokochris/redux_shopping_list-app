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
  ImageBackground,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../Redux/reducers";
import ItemForm from "../components/ItemsForm";
import Modal from "react-native-modal";
import home from "../assets/home.jpg";
import { ScrollView } from "react-native";
import { Icon } from "@rneui/themed";
import Swipeable from "react-native-gesture-handler/Swipeable";
// import Animated from "react-native-reanimated";

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
  console.log(shoppingList);
  // Calculate the total cost by multiplying price with quantity for each item
  const totalCost = shoppingList.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Filter the shoppingList based on the search term
  const filteredList = shoppingList.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [swipedItemId, setSwipedItemId] = useState(null);

  const RightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0.7, 0],
    });
    return (
      <Pressable
        style={{
          width: "100%",
          height: 80,
          backgroundColor: "tomato",
          paddingVertical: 5,
          paddingHorizontal: 15,
          marginBottom: 10,
          borderRadius: 8,
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
        onPress={(item) => handleRemoveItem(item.id)}
      >
        {/* <Animated.Text style={{ transform: [{ scale }] }}>
          Delete
        </Animated.Text> */}
        <Icon name="delete" color="whitesmoke" />
      </Pressable>
    );
  };

  return (
    <SafeAreaView
      style={{
        // alignItems: "center",
        flex: 1,
      }}
    >
      <StatusBar
        barStyle={"dark-content"}
        translucent={false}
        backgroundColor="white"
      />
      <View
        style={{
          // flex: 1,
          height: 60,
          backgroundColor: "white",
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
              // backgroundColor: "whitesmoke",
              borderRadius: 100,
              // borderWidth: 5,
              // borderColor: "#2F2F2F",
              // borderColor: "whitesmoke",
            }}
          >
            <Image
              source={require("../assets/logo.png")}
              style={{ width: 45, height: 45 }}
            />
          </View>
        </View>
        {/* <View style={{ flex: 1 }}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
        </View> */}
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
          paddingHorizontal: 5,
        }}
      >
        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        {/* <View
          style={{
            width: "100%",
            height: 80,
            // backgroundColor: "whitesmoke",
            padding: 5,
            marginBottom: 10,
            borderRadius: 8,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "20%",
              height: "100%",
              // backgroundColor: "tomato",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Image</Text>
          </View>
          <View
            style={{
              width: "60%",
              height: "100%",
              // backgroundColor: "yellow",
              padding: 5,
              justifyContent: "center",
              // alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>R Price</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Item</Text>
            <Text style={{ color: "grey", fontSize: 13, marginTop: 2 }}>
              #/UnitOfMeasure
            </Text>
          </View>
          <View
            style={{
              width: "20%",
              height: "100%",
              // backgroundColor: "tomato",

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18 }}>qty</Text>
          </View>
        </View> */}
        {shoppingList ? (
          <FlatList
            data={shoppingList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              // <View>
              //   <View style={styles.listItemContainer}>
              //     <Image source={{ uri: item.image }} style={styles.image} />
              //     <View style={styles.textContainer}>
              //       <Text>{item.name}</Text>
              //       <Text>Quantity: {item.quantity}</Text>
              //       <Text>Price: R{item.price.toFixed(2)}</Text>
              //     </View>
              //     <Button
              //       title="Remove"
              //       onPress={() => handleRemoveItem(item.id)}
              //     />
              //   </View>
              // </View>
              <Swipeable renderRightActions={RightActions}>
                <View
                  style={{
                    width: "100%",
                    height: 80,
                    backgroundColor: "whitesmoke",
                    padding: 5,
                    marginBottom: 10,
                    borderRadius: 8,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      width: "20%",
                      height: "100%",
                      // backgroundColor: "tomato",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 8,
                      resizeMode: "cover",
                    }}
                  />
                  <View
                    style={{
                      width: "60%",
                      height: "100%",
                      // backgroundColor: "yellow",
                      padding: 5,
                      justifyContent: "center",
                      // alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      R {item.price.toFixed(2)}
                    </Text>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                      {item.name}
                    </Text>
                    <Text style={{ color: "grey", fontSize: 13, marginTop: 2 }}>
                      #/UnitOfMeasure
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "20%",
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 18 }}>{item.quantity}</Text>
                  </View>
                </View>
              </Swipeable>
            )}
          />
        ) : (
          <TouchableOpacity
            style={{
              width: "100%",
              height: 80,
              backgroundColor: "#5F6F52",
              padding: 5,
              marginBottom: 10,
              borderRadius: 8,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={toggleModal}
          >
            {/* <Image
                    source={{ uri: item.image }}
                    style={{
                      width: "20%",
                      height: "100%",
                      // backgroundColor: "tomato",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 8,
                      resizeMode: "cover",
                    }}
                  />
                  <View
                    style={{
                      width: "60%",
                      height: "100%",
                      // backgroundColor: "yellow",
                      padding: 5,
                      justifyContent: "center",
                      // alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      R {item.price.toFixed(2)}
                    </Text>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                      {item.name}
                    </Text>
                    <Text style={{ color: "grey", fontSize: 13, marginTop: 2 }}>
                      #/UnitOfMeasure
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "20%",
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 18 }}>{item.quantity}</Text>
                  </View> */}
            {/* <Text>Nothing to display</Text> */}
            <Icon name="add" color="whitesmoke" />
          </TouchableOpacity>
        )}

        {/* </ScrollView> */}
        <Pressable
          onPress={toggleModal}
          style={{
            width: 60,
            height: 60,
            backgroundColor: "#5F6F52",
            position: "absolute",
            bottom: 10,
            right: 10,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
        >
          <Icon name="add" color="whitesmoke" />
        </Pressable>
        <Modal isVisible={isModalVisible} style={{ borderRadius: 8 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ItemForm toggleModal={toggleModal} />
          </ScrollView>
        </Modal>
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
