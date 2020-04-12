import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducers from "./src/redux/rootReducer";

//SCREENS
import {ExampleScreen} from "./src/screens/example/ExampleScreen"

const reducer = combineReducers(reducers);

const store = createStore(reducer, applyMiddleware(thunk));


const Stack = createStackNavigator();

export default function App() {
  // console.log(store, "this is the store")
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#fff'
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
            <Stack.Screen name="Home" component={ExampleScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </Display> */}
    </Provider>
  );
}
