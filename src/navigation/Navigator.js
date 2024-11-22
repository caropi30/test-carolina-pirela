import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StackNavigation from './StackNavigation'
import routes from './routes'

const Stack = createNativeStackNavigator()

const Navigator = () => (
    <Stack.Navigator
        initialRouteName={routes.LOGIN}
        screenOptions={{ gestureEnabled: false }}
    >
        {StackNavigation.map((screen) => (
            <Stack.Screen
                key={screen.name}
                name={screen.name}
                component={screen.component}
                options={screen.options}
            />
        ))}
    </Stack.Navigator>
)

export default Navigator
