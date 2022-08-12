import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from "expo-status-bar";
import Home from "./Screens/Home";
import FullPost from "./Screens/FullPost";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='Fullpost' component={FullPost} options={{ headerShown: false }} />
          </Stack.Navigator>
      </SafeAreaProvider>
      <StatusBar theme="auto" />
    </NavigationContainer>
  );
}