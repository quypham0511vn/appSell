import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Header from "../component/header/index";
import listproduct from "../fakedata/listproduct";
import ButtonBuy from "../component/ButtonBuy/index";
import { useState } from "react/cjs/react.development";
function Item({ uri }) {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri }} style={styles.img}></Image>
    </View>
  );
}
function ProductDetail({ navigation, route }) {
  const { idProduct } = route.params;
  const [number, setNumber] = useState(0);
  const product = listproduct.filter((item) => item.id === idProduct)[0];
  const handleAddProduct = () => {
    setNumber((state) => state + 1);
  };
  const handleSubProduct = () => {
    setNumber((state) => state - 1);
  };
  return (
    <View style={styles.container}>
      <Header title="Chi tiết sản phẩm"> </Header>
      <TouchableOpacity
        style={styles.backbtn}
        onPress={() => {
          navigation.navigate("ProductScreen");
        }}
      >
        <Text style={styles.backtext}>Quay về</Text>
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.content}>
          <View style={{ height: 360 }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
              horizontal={true}
              data={product.carouselImages}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                return <Item uri={item}></Item>;
              }}
            ></FlatList>
          </View>
          <View style={styles.btnBuy}>
            <ButtonBuy
              number={number}
              onAddProduct={handleAddProduct}
              onSubProduct={handleSubProduct}
            ></ButtonBuy>
          </View>
          <View style={styles.item}>
            <Text style={styles.nameDetail}>Tên sản phẩm</Text>
            <Text style={styles.detail}>{product.name}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.nameDetail}>Chi tiết</Text>
            <Text style={styles.detail}>{product.details}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.nameDetail}>Màu sắc</Text>
            <Text style={styles.detail}>{product.colour}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.nameDetail}>Kích thước</Text>
            <Text style={styles.detail}>{product.sizes.toString()}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.nameDetail}>Giá</Text>
            <Text style={styles.detail}>{product.price}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCDCDC",
  },
  content: {
    flex: 1,
  },
  btnBuy: {
    margin: 2,
    marginHorizontal: 28,
  },
  item: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  nameDetail: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#FF2400",
    fontStyle: "italic",
  },
  detail: {
    fontSize: 17,
    fontStyle: "italic",
    color: "#6B8E23",
    marginHorizontal: 9,
  },
  itemContainer: {
    width,
    height: 350,
  },
  img: {
    width,
    height: 350,
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

export default ProductDetail;
