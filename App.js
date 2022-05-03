import { StatusBar } from 'expo-status-bar';
import { React, useCallback } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, Alert } from 'react-native';
import mainAlbumCover from './assets/ineverlikedyoucover.jpeg'

const supportedURL = "https://music.apple.com/us/album/i-never-liked-you/1621119097";
const unsupportedURL = "slack://open?team=123456";


const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
  <View>
    <TouchableOpacity
        onPress={handlePress}
        style={styles.button}>
        <Text style={styles.buttonTitles} title={children}>GO LISTEN</Text>
    </TouchableOpacity>
  </View>);
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>I NEVER LIKED YOU</Text>
      <Text style={styles.subtitle}>OUT NOW</Text>
      <Image source={mainAlbumCover} style={styles.mainImage} />
      <OpenURLButton url={supportedURL}>
        GO LISTEN
      </OpenURLButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    color: '#fefefe',
    fontWeight: "bold",
    fontSize: 28
  },
  subtitle: {
    fontSize: 14,
    color: '#e31e3c',
    marginBottom: 20
  },
  mainImage: {
    height: 300,
    width: 300
  },
  button: {
    marginTop: 20,
    backgroundColor: '#e31e3c',
    borderRadius: 50
  },
  buttonTitles: {
    fontSize: 18,
    fontWeight: '500',
    paddingVertical: 15,
    paddingHorizontal: 50,
    color: '#fefefe'
  }
});
