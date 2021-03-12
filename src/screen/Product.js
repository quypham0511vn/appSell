import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
import data from "../fakedata/listproduct";
import Header from "../component/header/index.js";
import { navigation } from "@react-navigation/native";
function ItemList({ navigation, data }) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductDetailScreen", { idProduct: data.id })
      }
    >
      <View style={styles.coverItem}>
        <View style={styles.coverImage}>
          <Image
            style={styles.image}
            source={{
              uri: data.thumbImage,
            }}
          ></Image>
        </View>
        <View style={styles.coverContent}>
          <Text style={styles.nameProduct} numberOfLines={3}>
            {data.name}
          </Text>
          <Text style={styles.price}>Giá: {data.price}</Text>
          <Text style={styles.color}>Màu: {data.colour}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function Product({ navigation }) {
  return (
    <View style={styles.coverground}>
      <View>
        <Header title="Danh sách sản phẩm"></Header>
        <TouchableOpacity
          style={styles.backbtn}
          onPress={() => {
            navigation.navigate("LoginScreen");
          }}
        >
          <Text style={styles.backtext}>Quay về</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemList navigation={navigation} data={item}></ItemList>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  coverground: {
    flex: 1,
    backgroundColor: "#DCDCDC",
  },
  coverItem: {
    padding: 5,
    backgroundColor: "#F0FFFF",
    marginVertical: 3,
    marginHorizontal: 6,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
  },
  coverImage: { width: 150, height: 180 },
  image: {
    width: 150,
    height: 180,
    resizeMode: "contain",
    borderTopRightRadius: 29,
    borderBottomLeftRadius: 24,
  },
  coverContent: {
    marginLeft: 5,
    flex: 1,
  },
  nameProduct: {
    fontSize: 18,
    marginBottom: 10,
    color: "#FF2400",
    fontStyle: "italic",
  },
  price: {
    fontSize: 17,
    marginBottom: 10,
    fontStyle: "italic",
    color: "#6B8E23",
  },
  color: {
    fontSize: 17,
    marginBottom: 5,
    fontStyle: "italic",
    color: "#6B8E23",
  },
  backbtn: {
    backgroundColor: "#ADD8E6",
  },
  backtext: {
    fontSize: 18,
    margin: 1,
    fontWeight: "bold",
    color: "#2E8B57",
  },
});
export default Product;
