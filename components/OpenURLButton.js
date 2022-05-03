import { React, useCallback } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, Alert } from 'react-native';

function OpenURLButton({ url, children }) {
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
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonTitles} title={children}>
          GO LISTEN
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default OpenURLButton;

const styles = StyleSheet.create({
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
