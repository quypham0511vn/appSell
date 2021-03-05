import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import account from "../fakedata/account";
export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const goLogin = () => {
    if (username.trim() === "" ) {
      alert("Tài khoản không được để trống!");
    }
    if (password .trim()=== "") {
      alert("Mật khẩu  không được để trống!");
    }
    if (username .trim() !=account.username) {
      alert("Tài khoản sai!");
     }
    if (password .trim() !=account.password ) {
      alert("Mật khẩu  sai!");
     }
    if (username===account.username && password=== account.password) {
    return  navigation.navigate("ProductScreen");
    } 
  };
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Image
          style={styles.imgLogo}
          source={require("../../src/img/logoThuongHieu.png")}
        />
        <Text style={{ color:"#800080", fontSize: 35, marginTop: 0 }}>Đăng nhập</Text>
        <TextInput
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={[styles.textInput, { marginTop: 20 }]}
          placeholder="Tên tài khoản"
        ></TextInput>
        <TextInput
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          style={[styles.textInput, { marginTop: 20 }]}
          placeholder="Mật khẩu"
        ></TextInput>
        <TouchableOpacity
          style={[styles.buttonLogin, { marginTop: 40 }]}
          onPress={goLogin}
        >
          <Text style={{ fontSize: 20, color: "#000" }}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0FFFF",
    alignItems: "center",
  },
  imgLogo: {
    width: 200,
    height: 200,
    marginTop: 25,
    resizeMode: "contain",
  },
  textInput: {
    width: 300,
    height: 50,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 25,
    textAlign: "center",
    backgroundColor: "#F5DEB3",
  },
  buttonLogin: {
    width: 150,
    height: 50,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#66CDAA",
  },
});
