import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Component/Home';
import {Provider} from './Component/Context/Context';
import {ViewProducts} from './Component/ViewProduct';
import {Details} from './Component/Details';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ViewProducts" component={ViewProducts} />
            {/* <Stack.Screen name='products' component={Products}/> */}
            <Stack.Screen name="details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
