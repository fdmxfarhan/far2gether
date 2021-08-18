import React, { useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Platform,
} from 'react-native';
import colors, { gray } from '../components/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from '../components/header';
import { white } from 'chalk';
import DocumentPicker from 'react-native-document-picker'
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Video from 'react-native-video';




export default home = () => {
    var [video, setVideo] = useState('undefined');
    // var Content = <View></View>;
    var pickFile = () => {
        try {
            DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            }).then((res) => {
                res = res[0];
                console.log(res);
                console.log(
                    res.uri,
                    res.type, // mime type
                    res.name,
                    res.size,
                )
            })
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
              // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err
            }
        }
    }
    return(
        <View style={styles.container}>
            <Header title={'far2gether'}/>
            {/* <Content /> */}
            <TouchableOpacity style={styles.plusButton} onPress={pickFile}>
                <Icon  style={styles.plusButtonIcon} name={'plus'} />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
    },
    plusButton: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        
    },
    plusButtonIcon: {
        color: 'white',
        backgroundColor: colors.blue,
        fontSize: 40,
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 40,
    }
});