import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { NavigatorParams } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface ItemProps {
  title: string;
  onPress(): void;
}

const Menu = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigatorParams>>();

  const Item = (props: ItemProps) => {
    const { title, onPress } = props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.item}>
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Item
        title="Introduction to reanimated 2"
        onPress={() => navigation.navigate("Introduction")}
      />
      <Item
        title="Pan gesture handler basics"
        onPress={() => navigation.navigate("PanGestureHandlerBasics")}
      />
      <Item
        title="Interpolate with ScrollView"
        onPress={() => navigation.navigate("InterpolateWithScrollView")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
});

export default Menu;
