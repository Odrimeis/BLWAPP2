import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import ImageViewer from '../../components/ImageViewer';
import { Border_radius, White_color } from '../../styles/constants';

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function ElementList() {
  return (
    <View style={styles.container}>
      <ImageViewer imgSource={PlaceholderImage} width={50} height={50} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Nombre del alimento</Text>
        <Text style={styles.text}>1/3</Text>
      </View>
      <IconButton icon="dots-vertical" size={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    gap: 8,
    borderRadius: Border_radius,
    width: '100%',
    backgroundColor: White_color,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    gap: 4,
  },
  text: {
    fontSize: 16,
  },
});
