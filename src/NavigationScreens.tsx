import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import route from './routes';
import { RootStackParamList } from './types';

const routes: Array<React.ComponentProps<any>> = route

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function NavigationScreens() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
          animation: 'none',
          contentStyle: { backgroundColor: '#DC0A2D'}
        }}
      >
        {
          routes.map(routeConfig => {
            return (
              <Stack.Screen
                key={routeConfig.name} {...routeConfig}
              />
            )
          })
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}