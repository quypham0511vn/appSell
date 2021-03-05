import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
function Header({ title }) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.cover}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}

Header.defaultProps = {
  title: "",
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: "#fff",
  },
  cover: {
    width: "100%",
    height: 54,
    backgroundColor: "#4682B4",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 38,
  },
  title: {
    fontSize: 27,
    marginTop: 2,
    fontWeight:"bold",
    color:"#7FFFD4"
  },
 
});

export default Header;
