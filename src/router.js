import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import HomePage from './pages/homepage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { deviceWidth } from './constants/constant_values';
import DummyPage from './pages/dummy';

const HomeStack = createStackNavigator();
const Stack = createStackNavigator();

const screenOptions =
{
    header: function name(params) {
        return null
    }
}

function MainStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={DirectTransition}>
            <HomeStack.Screen options={screenOptions} name="Home" component={HomePage} />
            <HomeStack.Screen options={screenOptions} name="Dummy" component={DummyPage} />
        </HomeStack.Navigator>
    );
}


export const Router = ({ navigation }) => {
    return (
        <NavigationContainer>
            <ScreenDrawer />
        </NavigationContainer>
    )
}

function ScreenDrawer() {
    return (
        <Stack.Navigator
            screenOptions={{
                header: function name(params) {
                    return null
                },
                gestureDirection: "horizontal",
            }}
            initialRouteName="TabBar">
            <Stack.Screen name="TabBar" component={BottomTabDrawer} />
            <Stack.Screen name="Home" options={GeneralTransition} component={MainStackScreen} />
        </Stack.Navigator>
    )
}

//If you do not use tab on your program, just commet these codes below until at the end of MyTabBar function, 
//and change initialRouteName.

const Tab = createBottomTabNavigator();

function BottomTabDrawer() {
    return (
        <Tab.Navigator tabBar={props => {
            return <MyTabBar {...props} />
        }}>
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Dummy" component={DummyPage} />

        </Tab.Navigator>
    )
}

const menuItems = [{ id: 0, title: "A" }, { id: 1, title: "B" }, { id: 2, title: "C" }, { id: 3, title: "D" }, { id: 4, title: "E" }]

function MyTabBar({ state, descriptors, navigation }) {
    return (
        [
            <View style={[{ flexDirection: 'row', alignItems: 'center', height: deviceWidth * 0.15, backgroundColor: 'white' }]}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === index;
                    const onPress = () => {

                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityStates={isFocused ? ['selected'] : []}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1, alignItems: 'center', height: deviceWidth * 0.15, justifyContent: 'center' }}
                        >
                            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                                {menuItems[index].title}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>]
    );
}

const GeneralTransition = {

    gestureDirection: 'horizontal',
    transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
    },
    cardStyleInterpolator: ({ current, next, layouts }) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        }),
                    },
                    {
                        scale: next
                            ? next.progress.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 0.9],
                            })
                            : 1,
                    },
                ],
            },
            overlayStyle: {
                opacity: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5],
                }),
            },
        };
    },
}

const DirectTransition = {
    gestureDirection: 'horizontal',
    transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
    },
    cardStyleInterpolator: ({ current, next, layouts }) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        }),
                    },
                ],
            },
            overlayStyle: {
                opacity: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5],
                }),
            },
        };
    },
}