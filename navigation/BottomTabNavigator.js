import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import BlogScreen from '../screens/BlogScreen';
import AccountScreen from '../screens/AccountScreen'
import Register from '../screens/RegisterScreen'
import Stats from '../screens/StatsScreen'

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Login';

export default function BottomTabNavigator({navigation, route}) {
    // Set the header title on the parent stack navigator depending on the
    // currently active tab. Learn more in the documentation:
    // https://reactnavigation.org/docs/en/screen-options-resolution.html

    return (
        <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <BottomTab.Screen
                name="Home"
                component={BlogScreen}
                options={{
                    tabBarLabel: () =>false,
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="md-home"/>,
                }}
            />
            <BottomTab.Screen
                name="Stats"
                component={Stats}
                options={{
                    tabBarLabel: () =>false,
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="md-stats"/>,
                }}
            />
            <BottomTab.Screen
                name="Friends"
                component={Register}
                options={{
                    tabBarLabel: () =>false,
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="md-people"/>,
                }}
            />
            <BottomTab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarLabel: () =>false,
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="md-people"/>,
                }}
            />
        </BottomTab.Navigator>
    );
}
