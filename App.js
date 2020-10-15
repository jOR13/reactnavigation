import * as React from 'react';
import {View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio" screenOptions={{
              
              headerStyle: {
                backgroundColor: '#993355',
              },
              headerTitleAlign: 'center'
            }}>
          <Stack.Screen
            name="Inicio"
            component={Inicio}
            
          />
          <Stack.Screen name="Nosotros" component={Nosotros} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
