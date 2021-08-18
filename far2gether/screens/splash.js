import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Animated,
} from 'react-native';
import colors, { gray } from '../components/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default splash = (props) => {
    const [animation, setAnimation] = useState(new Animated.Value(0))

    const boxInterpolation =  animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    })
    const animatedStyle = {
        opacity: boxInterpolation
    }
    useEffect(() => {
        Animated.timing(animation, {
                toValue:1,
                duration: 1000,
                useNativeDriver: true,
        }).start( () => {
            Animated.timing(animation,{
                toValue:1,
                duration: 3000,
                useNativeDriver: true,
            }).start( () => {
                Animated.timing(animation,{
                    toValue:0,
                    duration: 1000,
                    useNativeDriver: true,
                }).start(() => {
                    props.navigation.navigate('Home');
                })
            })
        })
    })
    return(
        <View style={styles.container}>
            <Animated.Text style={{...styles.title, ...animatedStyle}}>Far2gether</Animated.Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.dark3,
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',

    },
    title: {
        color: colors.purple,
        fontFamily: 'Tahoma',
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 300,
        opacity: 0,
    },
});