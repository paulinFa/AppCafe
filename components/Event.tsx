import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, View, SafeAreaView, Text, Alert } from 'react-native';
import { Button } from "@react-native-material/core";

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';

export default function Event({ name }: { name: string }) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Button
                    title={name}
                    onPress={() => Alert.alert('Notification envoyé',name + ' envoyé')}
                />
            </View>
        </SafeAreaView>
    );
}

function handleHelpPress() {
    console.log("poo");
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    button : {
      height: "80%"
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightContainer: {
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center',
    },
    helpContainer: {
        marginTop: 15,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        textAlign: 'center',
    },
});
