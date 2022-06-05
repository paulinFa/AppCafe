import { StatusBar } from 'expo-status-bar';
import {Alert, Button, Platform, SafeAreaView, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Event from "../components/Event";

export default function ModalScreen() {
  return (
        <SafeAreaView style={styles.container}>
            <View>
                <Button
                    title="popo"
                    onPress={() => Alert.alert('Notification envoyé','café envoyé')}
                />
            </View>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
