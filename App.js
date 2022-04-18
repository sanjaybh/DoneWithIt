import React from 'react'
import Home from './src/screens/Home';
import About from './src/screens/About';
import Courses from './src/screens/Courses';
import Contact from './src/screens/Contact';
import UserData from './src/screens/UserData';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator()
  const channelName = 'Mrbhans.com';
  const homeScreenHeading = channelName.split('.')[0]

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/* <Stack.Screen name="Mrbhans" component={Home} /> */}

        {/* Home Screen */}
        <Stack.Screen name={homeScreenHeading} options={{
          headerShown:false,
          headerTitleStyle:{
            fontSize: 25
          },
          headerTitleAlign: 'center'
        }}>
          {(props) => <Home {...props} channelName = {channelName} />}
        </Stack.Screen>

        {/* About Screen */}
        <Stack.Screen name='About' options={{
          headerTitleStyle:{
            fontSize: 25
          },
          headerTitleAlign: 'center'
        }}>
          {(props) => <About {...props} />}
        </Stack.Screen>

        {/* Contact Screen */}
        <Stack.Screen name='Contact' options={{
          headerTitleStyle:{
            fontSize: 25
          },
          headerTitleAlign: 'center'
        }}>
          {(props) => <Contact {...props} />}
        </Stack.Screen>

        {/* UserData / Student Screen */}
        <Stack.Screen name='Student' options={{
          headerTitleStyle:{
            fontSize: 25
          },
          headerTitle : 'Students Data',
          headerTitleAlign: 'center'
        }}>
          {(props) => <UserData {...props} />}
        </Stack.Screen>

        {/* Courses Screen */}
        <Stack.Screen name='Courses' options={{
          headerTitleStyle:{
            fontSize: 25
          },
          headerTitle : 'Courses',
          headerTitleAlign: 'center'
        }}>
          {(props) => <Courses {...props} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
