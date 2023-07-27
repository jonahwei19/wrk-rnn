import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Matches, Messages, Profile, LoginPage,SignUpPage,Survey } from "./screens";
import { PRIMARY_COLOR, DARK_GRAY, BLACK, WHITE } from "./assets/styles";
import TabBarIcon from "./components/TabBarIcon";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

 
import { CombinedContext }  from './CombinedContextType';

const App = () => {
  const [user, setUser] = useState(null);
  const [match, setMatch] = useState(null);
  const [myMatches, setMyMatches] = useState(null);

  return (
    <CombinedContext.Provider value={{ user, match, myMatches, setMatch, setUser, setMyMatches }}>
  <NavigationContainer>
    <Stack.Navigator>
      
      <Stack.Screen
        name="Login"
        options={{ headerShown: false, animationEnabled: false }}
      >
      {() => (
          <Tab.Navigator
            tabBarOptions={{
              showLabel: false,
              activeTintColor: PRIMARY_COLOR,
              inactiveTintColor: DARK_GRAY,
              labelStyle: {
                fontSize: 14,
                textTransform: "uppercase",
                paddingTop: 10,
              },
              style: {
                backgroundColor: WHITE,
                borderTopWidth: 0,
                marginBottom: 0,
                shadowOpacity: 0.05,
                shadowRadius: 10,
                shadowColor: BLACK,
                shadowOffset: { height: 0, width: 0 },
              },
            }}
          >
            <Tab.Screen
              name="Sign Up"
              component={SignUpPage}
              options={{
                tabBarIcon: ({ focused }) => (
                  <TabBarIcon
                    focused={focused}
                    iconName="search"
                    text="Sign Up"
                  />
                ),
              }}
            />

            <Tab.Screen
              name="Sign In"
              component={LoginPage}
              options={{
                tabBarIcon: ({ focused }) => (
                  <TabBarIcon
                    focused={focused}
                    iconName="search"
                    text="Sign In"
                  />
                ),
              }}
            />

            

            
          </Tab.Navigator>
        )}
        </Stack.Screen>
      <Stack.Screen
        name="Survey"
        component={Survey}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Stack.Screen
        name="App"
        options={{ headerShown: false, animationEnabled: false }}
      >
        {() => (
          <Tab.Navigator
            tabBarOptions={{
              showLabel: false,
              activeTintColor: PRIMARY_COLOR,
              inactiveTintColor: DARK_GRAY,
              labelStyle: {
                fontSize: 14,
                textTransform: "uppercase",
                paddingTop: 10,
              },
              style: {
                backgroundColor: WHITE,
                borderTopWidth: 0,
                marginBottom: 0,
                shadowOpacity: 0.05,
                shadowRadius: 10,
                shadowColor: BLACK,
                shadowOffset: { height: 0, width: 0 },
              },
            }}
          >
            <Tab.Screen
              name="Explore"
              component={Home}
              options={{
                tabBarIcon: ({ focused }) => (
                  <TabBarIcon
                    focused={focused}
                    iconName="search"
                    text="Explore"
                  />
                ),
              }}
            />

          

            <Tab.Screen
              name="Chat"
              component={Messages}
              options={{
                tabBarIcon: ({ focused }) => (
                  <TabBarIcon
                    focused={focused}
                    iconName="chatbubble"
                    text="Chat"
                  />
                ),
              }}
            />

            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarIcon: ({ focused }) => (
                  <TabBarIcon
                    focused={focused}
                    iconName="person"
                    text="Profile"
                  />
                ),
              }}
            />
          </Tab.Navigator>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  
  </CombinedContext.Provider>
  );
};

export default App;
