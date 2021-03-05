import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import data from "../fakedata/listproduct";
import Header from "../component/header/index.js";
function ItemList({ data }) {
  return (
    <TouchableOpacity>
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
          <Text style={styles.backtext}>Trở lại</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemList data={item}></ItemList>}
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
    fontSize: 20,
    backgroundColor: "#ADD8E6",
  },
  backtext: {
    fontSize: 20,
    margin: 2,
    fontWeight: "bold",
    color: "#2E8B57",
  },
});
export default Product;
