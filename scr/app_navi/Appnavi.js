import { createStackNavigator, navigationOptions, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Catagory from "../secreens/catagories/entry_catalog";
import React, { Component } from 'react';

import Account from "../secreens/account/entry_account"
import Chat from "../secreens/chat/entry_chat"
import Request from "../secreens/request/entry_request"
import Notification from "../secreens/notifications/entry_notification"
import Icon from "react-native-vector-icons/Ionicons"

const Requests = createStackNavigator(
    {

        Request: {
            screen: Request,
            navigationOptions: {
                header: null,
                headerLeft: null
            }
        }
    },
    {
        initialRouteName: "Request"
    }
);

const Catagories = createStackNavigator(
    {

        Catagories: {
            screen: Catagory,
            navigationOptions: {
                header: null,
                headerLeft: null
            }
        }
    },
    {
        initialRouteName: "Catagories"
    }
);
const Accounts = createStackNavigator(
    {
        Account: Account,

    },
    {
        initialRouteName: "Account"
    }
);
const Chats = createStackNavigator(
    {
        Chat: Chat,
    },
    {
        initialRouteName: "Chat"
    }
);
const Notifications = createStackNavigator(
    {
        Notifications: Notification,
    },
    {
        initialRouteName: "Notifications"
    }
);

const TabNavigator = createBottomTabNavigator(
    {
        Requests: {
            screen: Requests,
            navigationOptions: {
                tabBarLabel: "Requests",
                tabBarIcon: ({ tintColor }) => (
             
                    <Icon name="md-clipboard" color={tintColor} size={30} />
                   
                )
            }

        },
        Notifications,
        Notifications: {
            screen: Notifications,
            navigationOptions: {
                tabBarLabel: 'Notifications',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-notifications" color={tintColor} size={30} />
                )
            }
        },

        Catagories: {
            screen: Catagories,
            navigationOptions: {
                tabBarLabel: 'Catagories',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-menu" color={tintColor} size={30} />
                )
            }
        },
        Accounts: {
            screen: Accounts,
            navigationOptions: {
                tabBarLabel: 'Accounts',
                tabBarIcon: ({ tintColor }) => (
                 
                    <Icon name="ios-person" color={tintColor} size={30} />
                  
                )
            }
        },

        Chats: {
            screen: Chats,
            navigationOptions: {
                tabBarLabel: 'Chats',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-text" color={tintColor} size={30} />
                )
            }
        },
    },
    {
        initialRouteName: "Catagories",
        tabBarOptions: {
            activeTintColor: "rgba(104,31,200,.8)",
            inactiveTintColor: "gray",
            
            // activeBackgroundColor:"rgba(236,239,241,1)",
            tabBarSelectedItemStyle: {
                borderTopWidth: 2,
                borderTopColor: 'red',
              },
            
            style: {
                height: 70,
               
            },
            labelStyle: {
                fontWeight: 'bold',
                marginTop: 12,
                color:"gray",
           

            }
            ,
            tabStyle: {
                
                paddingBottom: 16,
                paddingTop: 23,
            }

        }
    },


);


const MainStackNavi = createAppContainer(TabNavigator)
export default MainStackNavi;