// components/VideoPreview.jsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import NavBar from './NavBar';
import VideoPlayer from './VideoPlayer';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

export default function VideoPreview() {
  // Using local m3u8 file from assets
  const videoUrl = 'asset:///video/output.m3u8';
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavBar />
      <View style={styles.container}>
        <Text style={styles.heading}>Video Preview</Text>
        <VideoPlayer originalUrl={videoUrl} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 36,
    marginBottom: 20,
    textAlign: 'center',
  }
});
