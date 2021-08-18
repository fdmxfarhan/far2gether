import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import colors from '../components/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export default Header = ({title}) => {
    return(
        <View style={styles.header}>
            <TouchableOpacity style={styles.homeButton}>
                <Icon  style={styles.homeButtonIcon} name={'home'}/>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.backButton}>
                <Icon  style={styles.backButtonIcon} name={'chevron-left'}/>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row-reverse',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 0,
    },
    backButton: {
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    homeButton: {
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    backButtonIcon: {
        flex: 2,
        fontSize: 20,
        color: colors.gray,
        paddingHorizontal: 10,
        paddingBottom: 0,
        paddingTop: 15,
    },
    homeButtonIcon: {
        flex: 2,
        fontSize: 23,
        color: colors.gray,
        paddingHorizontal: 10,
        paddingBottom: 0,
        paddingTop: 13,
    },
    title: {
        flex: 5,
        fontFamily: 'iransans',
        fontSize: 22,
        color: colors.blue,
        textAlign: 'center',
        paddingVertical: 10,
        paddingBottom: 10,
    }
});