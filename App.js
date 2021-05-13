import React from 'react';
import {Local} from "./components/Local";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Itunes} from "./components/Itunes/Itunes";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Track} from "./components/Itunes/Track";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

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
                    tabBarLabel: 'Local',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="folder-music" color={color} size={size} />
                    )}}
                name="Local"
                component={Local}/>
            <Tab.Screen
                options={{
                    tabBarLabel: 'Itunes',
                    tabBarIcon: ({ color, size }) => (
                        <Fontisto name="applemusic" color={color} size={size} />
                    )}}
                name="Itunes"
                component={Itunes}/>
        </Tab.Navigator>
    )
}

export default function App() {
    const Stack = createStackNavigator();
  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <NavigationContainer>
                  <Stack.Navigator>
                      <Stack.Screen
                          name="Main"
                          component={Main}
                          options={{
                              title: 'Itunes Seeker',
                              headerStyle: {
                                  backgroundColor: '#E7414D',
                              },
                              headerTintColor: '#fff',
                              headerTitleStyle: {
                                  fontWeight: 'bold',
                              },
                          }}
                      />
                      <Stack.Screen
                          name="Track"
                          component={Track}
                          options={{
                              title: 'Itunes Track',
                              headerStyle: {
                                  backgroundColor: '#E7414D',
                              },
                              headerTintColor: '#fff',
                              headerTitleStyle: {
                                  fontWeight: 'bold',
                              },
                          }}
                      />
                  </Stack.Navigator>
              </NavigationContainer>
          </PersistGate>
      </Provider>
  );
}
