import React from "react";
import { Easing, Animated, Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Block } from "galio-framework";

// screens
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Pro from "../screens/Pro";
import Profile from "../screens/Profile";
import Register from "../screens/Register";
import Login from "../screens/Login";
import Elements from "../screens/Elements";
import Articles from "../screens/Articles";
import Emergency from "../screens/Emergency";

// drawer
import CustomDrawerContent from "./Menu";

// header for screens
import { Icon, Header } from "../components";
import { argonTheme, tabs } from "../constants";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function DashboardStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Emergency"
        component={Emergency}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Emergency" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Register"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Login"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Home" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="User"
        component={User}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="User's cases"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />

      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="SOS Requests"
              navigation={navigation}
              scene={scene}
            />
          ),
          // headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Emergency"
        component={Emergency}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Emergency" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="RouteSos"
        component={RouteSos}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="RouteSos" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="Sos"
        component={Sos}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="SOS" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="EmergencyDash"
        component={EmergencyDash}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Emergency Dash"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />

      <Stack.Screen
        name="EmergencyDetails"
        component={EmergencyDetails}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Emergency Details"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />

      <Stack.Screen name="Add Official" component={addOfficial} />
      <Stack.Screen
        name="Route"
        component={Route}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Route" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}

// function TrackStack(props) {
// 	return (
// 		<Stack.Navigator mode="card" headerMode="screen">
// 			<Stack.Screen
// 				name="Track"
// 				component={Track}
// 				options={{
// 					header: ({ navigation, scene }) => <Header title="Track Safety" navigation={navigation} scene={scene} />,
// 					cardStyle: { backgroundColor: "#F8F9FE" },
// 				}}
// 			/>
// 		</Stack.Navigator>
// 	);
// }

function MapStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Maps"
        component={Maps}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Maps" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}
function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal",
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Elements" component={ElementsStack} />
      <Drawer.Screen name="Articles" component={ArticlesStack} />
    </Drawer.Navigator>
  );
}
