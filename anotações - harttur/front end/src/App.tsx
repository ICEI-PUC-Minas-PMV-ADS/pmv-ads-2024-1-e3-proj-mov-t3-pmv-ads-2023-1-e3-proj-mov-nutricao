// src/App.tsx
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NotesScreen from './screens/NotesScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Notes">
        <Stack.Screen 
          name="Notes" 
          component={NotesScreen} 
          options={{ title: 'Anotações' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
