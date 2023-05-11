import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Navbar = ({ liveVideo, detectionLogs, profile }) => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Live Video Feed"
                component={liveVideo}
                options={{
                    tabBarLabel: "Live Video",
                    tabBarIcon: ({ color, size }) => <Ionicons name="videocam-outline" color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Detection History"
                component={detectionLogs}
                options={{
                    tabBarLabel: "Detection Logs",
                    tabBarIcon: ({ color, size }) => <Ionicons name="albums-outline" color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Your Profile"
                component={profile}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" color={color} size={size} />,
                }}
            />
        </Tab.Navigator>
    );
};

export default Navbar;
