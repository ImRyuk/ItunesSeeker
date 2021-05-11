import React from 'react';
import {Local} from "./components/Local";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Itunes} from "./components/Itunes/Itunes";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

function Main() {
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#E7414D',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen
                options={{
                    tabBarLabel: 'Local',}}
                name="Local"
                component={Local}/>
            <Tab.Screen
                options={{
                    tabBarLabel: 'Itunes',
                }}
                name="Itunes"
                component={Itunes}/>
        </Tab.Navigator>
    )
}

export default function App() {
    const Stack = createStackNavigator();

  return (
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen
                      name="Login"
                      component={Main}
                      options={{
                          title: 'Se connecter',
                          headerStyle: {
                              backgroundColor: '#1E375A',
                          },
                          headerTintColor: '#fff',
                          headerTitleStyle: {
                              fontWeight: 'bold',
                          },
                      }}
                  />
              </Stack.Navigator>
          </NavigationContainer>
  );
}
