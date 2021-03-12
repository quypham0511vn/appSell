import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
function ButtonBuy({ number = 12, onAddProduct, onSubProduct }) {
  return (
    <>
      {number === 0 && (
        <TouchableOpacity
          style={{
            backgroundColor: "#006666",
            width: "50%",
            height: 35,
            borderRadius: 12,
            justifyContent:"center",
            alignItems: "center",
          }}
          onPress={onAddProduct}
        >
          <Text
            style={{
              color: "#CCCCCC",
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            Mua hàng
          </Text>
        </TouchableOpacity>
      )}
      {number !== 0 && (
        <View
          style={{
            width: "100%",
            height: 35,
            borderRadius: 10,
            overflow: "hidden",
            flexDirection: "row",
            justifyContent: "space-between",
            borderWidth: 1.5,
            borderColor: "#ADD8E6",
            shadowColor: "#000",
            shadowOpacity: 0.4,
            shadowRadius: 3.84,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              height: 35,
              width: 70,
              backgroundColor: "#006666",
              justifyContent: "center",
              alignItems: "center",
              borderRadius:10,
            }}
            onPress={onAddProduct}
          >
            <Text
              style={{
                color: "#CCCCCC",
                fontWeight: "bold",
                fontSize:22
              }}
            >
              +
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color:"#006633",
            }}
          >
            {number}
          </Text>
          <TouchableOpacity
            style={{
              height: 35,
              width: 70,
              backgroundColor: "#006666",
              justifyContent: "center",
              alignItems: "center",
              borderRadius:10,
            }}
            onPress={onSubProduct}
          >
            <Text
              style={{
                color: "#CCCCCC",
                fontWeight: "bold",
                fontSize:30
              }}
            >
              -
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

export default ButtonBuy;
