import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  RefreshControl,
  LogBox,
} from "react-native";
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from "react-native-cards";
import MaterialCard from "../components/MaterialCard";
import official from "../constants/officials";
import { Block, Text, theme, Button } from "galio-framework";
const { width, height } = Dimensions.get("screen");
import * as firebase from "firebase";

export default function listofficials(props) {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {loading ? (
        <Image
          source={require("../assets/people.gif")}
          style={{ width: "100%", height: "100%" }}
        />
      ) : users.length > 0 ? (
        users.map((user) => {
          return <MaterialCard officials={user} />;
        })
      ) : null}
      <Block center>
        <Button
          color="info"
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("Add Official");
          }}
        >
          ADD OFFICIAL
        </Button>
      </Block>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  btn: {
    marginLeft: 300,
  },
  button: {
    marginBottom: theme.SIZES.BASE,
    width: width - theme.SIZES.BASE * 5.2,
  },
});
