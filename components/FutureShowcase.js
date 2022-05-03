import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import theme from '../theme.js'
import mainAlbumCover from '../assets/ineverlikedyoucover.jpeg'
import Constants from "expo-constants";

import OpenURLButton from '../components/OpenURLButton';

const supportedURL = "https://music.apple.com/us/album/i-never-liked-you/1621119097";
const unsupportedURL = "slack://open?team=123456";


export default function FutureShowcase() {
  return (
    <View style={styles.showcaseContainer}>
      <Text style={styles.mainTitle}>I NEVER LIKED YOU</Text>
      <Text style={styles.subtitle}>OUT NOW</Text>
      <Image source={mainAlbumCover} style={styles.mainImage} />
      <OpenURLButton url={supportedURL}>GO LISTEN</OpenURLButton>
    </View>
  );
}

const styles = StyleSheet.create({
  showcaseContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Constants.statusBarHeight + 10
  },
  mainTitle: {
    color: theme.colors.textPrimary,
    fontWeight: "bold",
    fontSize: theme.fontSizes.mainHeading
  },
  subtitle: {
    fontSize: 14,
    color: '#e31e3c',
    marginBottom: 20
  },
  mainImage: {
    height: 300,
    width: 300
  }
});
