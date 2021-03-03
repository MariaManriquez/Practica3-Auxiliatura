import React from "react";

import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions } from "react-native";

import { Feather } from "@expo/vector-icons";

import { 
    HomeScreen, 
    ProfileScreen, 
    MyListingsScreen, 
    ForumsScreen, 
    SettingsScreen, 
    HelpScreen, 
    LogoutScreen
} from "./screens";

import SideBar from '/components/SideBar'

const createDrawerNavigator = createDrawerNavigator(
  {
      HomeScreen: {
          screen: HomeScreen,
          navigationOptions: {
            tittle: "Home",
            drawerIcon: ({tintColor}) => <Feather name="home" size={16} color={tintColor} />
          }
      },
      ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: {
          tittle: "Profile",
          drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />
        }
      },
      MyListingsScreen: {
        screen: MyListingsScreen,
        navigationOptions: {
          tittle: "MyListings",
          drawerIcon: ({tintColor}) => <Feather name="list" size={16} color={tintColor} />
        }
      },
      ForumsScreen: {
        screen: ForumsScreen,
        navigationOptions: {
          tittle: "Forums",
          drawerIcon: ({tintColor}) => <Feather name="users" size={16} color={tintColor} />
        }
      },
      SettingsScreen: {
        screen: SettingsScreen,
        navigationOptions: {
          tittle: "Settings",
          drawerIcon: ({tintColor}) => <Feather name="setting" size={16} color={tintColor} />
        }
      },
      HelpScreen: {
        screen: HelpScreen,
        navigationOptions: {
          tittle: "Help",
          drawerIcon: ({tintColor}) => <Feather name="help" size={16} color={tintColor} />
        }
      },
      LogoutScreen: {
        screen: LogoutScreen,
        navigationOptions: {
          tittle: "Logout",
          drawerIcon: ({tintColor}) => <Feather name="log-out" size={16} color={tintColor} />
        }
      }
  },
  {
      contentComponent: props => <SideBar {...props} />,

      drawerWith: Dimensions.get("window").width * 0.85,
      hideStatusBar: true,

        contentOptptions:{
            activeBackgroundColor: "rgba(212, 118, 207, 0.2)",
            activeTintColor: "#531158",
            itemsContainerStyle: {
                marginTop: 16,
                marginHorizontal: 8
            },
            itemStyle: {
              borderRadius: 4
            }
        }
  }
);

export default createAppContainer(DrawerNavigator);