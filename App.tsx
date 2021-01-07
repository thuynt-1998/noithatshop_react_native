import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "./src/js/store/index";
import { decode, encode } from "base-64";
import Navigation from "./src/js/navigation/Navigation";
import {
  Provider as PaperProvider,
} from "react-native-paper";
import TabTopNavigation from "./src/js/navigation/TabTopNavigation";

declare const global: {
  btoa: any;
  atob: any
}

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <TabTopNavigation />
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
}
