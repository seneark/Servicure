import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  ScrollView,
  RefreshControl,
  LogBox,
} from "react-native";

import TodoItem from "../components/todoItem";
import AddTodo from "../components/addTodo";
import { Block, theme, Text } from "galio-framework";
import * as firebase from "firebase";

const { width, height } = Dimensions.get("screen");

export default function App({ navigation }) {
  const [incompleteTodo, setIncompleteTodo] = useState([]);
  const [completeTodo, setCompleteTodo] = useState([]);
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
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 25,
              color: theme.COLORS.INFO,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Welcome, {firebase.auth().currentUser.email.toString()}
          </Text>

          <Text style={styles.title}>Current Cases</Text>
          <View style={styles.content}>
            {incompleteTodo.length > 0 ? (
              <View style={styles.list}>
                <FlatList
                  data={incompleteTodo}
                  renderItem={({ item }) => (
                    <TodoItem
                      item={item}
                      pressHandler={() => {
                        pressHandler(item);
                      }}
                    />
                  )}
                />
              </View>
            ) : (
              <Block center>
                <Text>There are no current Cases</Text>
              </Block>
            )}
          </View>
          <Text style={styles.title}>Previous Cases</Text>
          <View style={styles.content}>
            {completeTodo.length > 0 ? (
              <View style={styles.list}>
                <FlatList
                  data={completeTodo}
                  renderItem={({ item }) => (
                    <TodoItem
                      item={item}
                      pressHandler={() => {
                        pressHandler(item);
                      }}
                    />
                  )}
                />
              </View>
            ) : (
              <Block center>
                <Text>There are no previous solved Cases</Text>
              </Block>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
  button: {
    marginBottom: theme.SIZES.BASE,
    width: width - theme.SIZES.BASE * 5.2,
  },
  title: {
    fontSize: 22,
    color: theme.COLORS.PRIMARY,
    fontWeight: "bold",
    textAlign: "center",
  },

  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
