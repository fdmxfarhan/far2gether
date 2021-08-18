import React, { useEffect, useState } from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import splash from './screens/splash';
import home from './screens/home';
import colors from './components/colors';

const App = (props) => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Splash" 
                    component={splash} 
                    options={({ route }) => ({ headerShown: false })}
                />
                <Stack.Screen 
                    name="Home" 
                    component={home} 
                    options={({ route }) => ({ 
                        headerShown: false,
                        title: 'خانه',
                        headerStyle: {
                            backgroundColor: colors.background,
                            textAlign: 'right',
                        },
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            textAlign: 'right',
                            fontFamily: 'iransans',
                        },
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};
AppRegistry.registerComponent(appName, () => App);
